
import { useNavigate } from "react-router-dom";
import "./LanguageCard.css";

export default function LanguageCard({ lang }) {
    const navigate = useNavigate();
    const Icon = lang.icon;

    return (
        <article
            className="lang-card"
            role="button"
            tabIndex={0}
            aria-label={`Open ${lang.name} editor`}
            onClick={() => navigate(`/editor/${lang.id}`)}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/editor/${lang.id}`)}
        >
            <span className="lang-glow" aria-hidden />

            {Icon && (
                <span className="lang-icon" aria-hidden>
                    <Icon />
                </span>
            )}

            <h3 className="lang-name">{lang.name}</h3>
        </article>
    );
}
