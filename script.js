:root {
    --color-texto: #1a1a1a;
    --color-texto-secundario: #555555;
    --color-meta: #777777;
    --color-borde: #e2e2e2;
    --fuente-principal: "Helvetica Neue", Arial, sans-serif;
    --ancho-maximo: 900px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--fuente-principal);
    color: var(--color-texto);
    background-color: #ffffff;
    line-height: 1.5;
}

/*Barra de Navegación*/
.reuters-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    border-bottom: 1px solid var(--color-borde);
    font-size: 0.85rem;
    font-weight: bold;
}

.nav-logo {
    font-size: 1.5rem;
    color: #ff8000; /*Color*/
    display: flex;
    align-items: center;
    gap: 8px;
}

.logo-circle {
    width: 24px;
    height: 24px;
    border: 2px dotted #ff8000;
    border-radius: 50%;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    color: var(--color-texto);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 15px;
}

.btn-signin {
    background: transparent;
    border: 1px solid var(--color-borde);
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.btn-subscribe {
    background: #000;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.contenedor-principal {
    max-width: var(--ancho-maximo);
    margin: 40px auto;
    padding: 0 20px;
}

.header-articulo {
    margin-bottom: 20px;
}

h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.2;
}

.bajada {
    font-size: 1.15rem;
    color: var(--color-texto-secundario);
    margin-bottom: 15px;
}

.meta-datos {
    font-size: 0.75rem;
    color: var(--color-meta);
    text-transform: uppercase;
}

.divisor-fino {
    border: 0;
    border-top: 1px solid var(--color-borde);
    margin: 30px 0;
}

/*Gráficos*/
.texto-columna {
    max-width: 680px;
    margin: 0 auto 20px 0;
    font-size: 1.05rem;
}

.subtitulo-reuters {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.contenedor-grafico {
    margin: 40px 0;
}

.placeholder-grafico {
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-meta);
    margin-bottom: 10px;
}

figcaption {
    font-size: 0.85rem;
    color: var(--color-texto-secundario);
}

/* --- Buscador y Tabla --- */
#inputBuscador {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border: 1px solid var(--color-borde);
    margin-bottom: 20px;
    font-family: inherit;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;
}

th {
    text-align: left;
    padding: 12px 8px;
    border-bottom: 2px solid var(--color-texto);
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--color-texto-secundario);
}

td {
    padding: 12px 8px;
    border-bottom: 1px solid var(--color-borde);
    font-size: 0.95rem;
}

/*Footer Botón*/
.footer-btn-container {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.btn-load-more {
    background: transparent;
    border: 1px solid var(--color-borde);
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: bold;
    color: var(--color-texto-secundario);
    cursor: pointer;
}
