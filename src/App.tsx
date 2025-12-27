import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import ContactPage from "@/pages/Contact";

function detectLocale(): "ko" | "en" {
    const saved = localStorage.getItem("locale");
    if (saved === "ko" || saved === "en") return saved;

    const lang = navigator.language?.toLowerCase() ?? "";
    return lang.startsWith("ko") ? "ko" : "en";
}

function RootRedirect() {
    return <Navigate to={`/${detectLocale()}`} replace />;
}

function LocaleRedirect({ to }: { to: string }) {
    return <Navigate to={`/${detectLocale()}${to}`} replace />;
}

function LocaleLayout({ locale }: { locale: "ko" | "en" }) {
    useEffect(() => {
        localStorage.setItem("locale", locale);
        document.documentElement.lang = locale;
    }, [locale]);

    return <Outlet />;
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<RootRedirect />} />

            <Route path="/privacy" element={<LocaleRedirect to="/privacy" />} />
            <Route path="/terms" element={<LocaleRedirect to="/terms" />} />
            <Route path="/contact" element={<LocaleRedirect to="/contact" />} />

            <Route path="/ko" element={<LocaleLayout locale="ko" />}>
                <Route index element={<Home locale="ko" />} />
                <Route path="privacy" element={<Privacy locale="ko" />} />
                <Route path="terms" element={<Terms locale="ko" />} />
                <Route path="contact" element={<ContactPage locale="ko" />} />
            </Route>

            <Route path="/en" element={<LocaleLayout locale="en" />}>
                <Route index element={<Home locale="en" />} />
                <Route path="privacy" element={<Privacy locale="en" />} />
                <Route path="terms" element={<Terms locale="en" />} />
                <Route path="contact" element={<ContactPage locale="en" />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}