export default function CookieBanner() {
  return (
    <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" className="cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-1834562721">
      <span id="cookieconsent:desc" className="cc-message">
        {"            Utilizamos Cookies para garantir que você obtenha a melhor experiência em nosso site. "}
        <a aria-label="learn more about cookies" role="button" tabIndex="0" className="cc-link" href="https://https//www.atlantanet.com.br/privacidade" target="_blank">
          {"Política de privacidade!"}
        </a>
      </span>
      <div className="cc-compliance">
        <a aria-label="dismiss cookie message" role="button" tabIndex="0" className="cc-btn cc-dismiss">
          {"OK"}
        </a>
      </div>
    </div>
  )
}
