"use strict";
const produtos = [
    {
        sku: "WF-08421",
        categoria: "Smartphones",
        selo: "LANÇAMENTO",
        nome: "Smartphone Pro Titanium 256GB - Cinza Espacial",
        nota: "4.8",
        de: 4399,
        preco: 3499,
        parcelas: 10,
        imagem: "smartphone",
        stock: 12,
        descricao:
            "Seu dia a dia com mais possibilidades. Acabamento em cinza espacial, amplo armazenamento e uma experiência fluida para trabalhar, criar e se conectar.",
        specs: {
            Armazenamento: "256 GB",
            Cor: "Cinza Espacial",
            Conectividade: "Wi-Fi e Bluetooth",
            Categoria: "Smartphone premium",
        },
    },
    {
        sku: "WF-77210",
        categoria: "Notebooks",
        selo: "-25% OFF",
        nome: "Ultrabook Core i7 16GB SSD 512GB 14” Full HD",
        nota: "5.0",
        de: 5199,
        preco: 3899,
        parcelas: 10,
        imagem: "notebook",
        stock: 8,
        descricao:
            "Potência que acompanha o seu ritmo. Um ultrabook compacto para estudar, trabalhar e criar, com processador Intel Core i7, memória de 16 GB e SSD para abrir seus programas com agilidade.",
        specs: {
            Processador: "Intel Core i7",
            Memória: "16 GB RAM",
            Armazenamento: "SSD de 512 GB",
            Tela: "14 polegadas • Full HD",
        },
    },
    {
        sku: "WF-41092",
        categoria: "Áudio",
        selo: "OFERTA",
        nome: "Fone de Ouvido Noise Cancelling Bluetooth 5.3",
        nota: "4.7",
        de: 899,
        preco: 649,
        parcelas: 6,
        imagem: "audio",
        stock: 20,
        descricao:
            "Entre no seu próprio mundo. Cancelamento de ruído para manter o foco, conexão Bluetooth 5.3 e um formato confortável para ouvir suas músicas e acompanhar cada detalhe.",
        specs: {
            Conexão: "Bluetooth 5.3",
            Tipo: "Headphone sem fio",
            Recurso: "Cancelamento de ruído",
            Cor: "Preto",
        },
    },
    {
        sku: "WF-62388",
        categoria: "Smartwatches",
        selo: "NOVO",
        nome: "Smartwatch Sport GPS Sensor Cardíaco Black",
        nota: "4.9",
        de: 1299,
        preco: 989,
        parcelas: 10,
        imagem: "watch",
        stock: 15,
        descricao:
            "Tecnologia no seu pulso. Acompanhe seus treinos e sua rotina com GPS e sensor cardíaco em um relógio de visual esportivo e acabamento preto.",
        specs: {
            Modelo: "Sport GPS",
            Sensores: "Sensor cardíaco",
            Recurso: "GPS integrado",
            Cor: "Preto",
        },
    },
    {
        sku: "WF-30517",
        categoria: "Monitores",
        selo: "OFERTA",
        nome: "Monitor Gamer 27” 165Hz QHD IPS",
        nota: "4.8",
        de: 2199,
        preco: 1699,
        parcelas: 10,
        imagem: "monitor",
        stock: 10,
        descricao:
            "Veja o jogo em outro nível. Tela de 27 polegadas com resolução QHD, painel IPS e taxa de atualização de 165 Hz para uma experiência visual fluida e cheia de detalhes.",
        specs: {
            Tela: "27 polegadas",
            Resolução: "QHD • 2560 × 1440",
            Painel: "IPS",
            Atualização: "165 Hz",
        },
    },
    {
        sku: "WF-55803",
        categoria: "Acessórios",
        selo: "NOVO",
        nome: "Teclado Mecânico Sem Fio Switch Silencioso",
        nota: "4.6",
        de: 599,
        preco: 449,
        parcelas: 5,
        imagem: "teclado",
        stock: 25,
        descricao:
            "Mais espaço para as suas ideias. Um teclado mecânico sem fio, com switches silenciosos e um formato versátil para completar seu setup de trabalho ou de jogos.",
        specs: {
            Tipo: "Mecânico",
            Conexão: "Sem fio",
            Switches: "Silenciosos",
            Categoria: "Acessórios",
        },
    },
];
const departamentos = [
    { nome: "Smartphones", imagem: "smartphone" },
    { nome: "Notebooks", imagem: "notebook" },
    { nome: "Áudio & Fones", filtro: "Áudio", imagem: "audio" },
    { nome: "Smartwatches", imagem: "watch" },
    { nome: "Monitores", imagem: "monitor" },
    { nome: "Acessórios", imagem: "teclado" },
];
const iconPaths = {
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    heart:
        '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    cart: '<path d="M2 3h3l3 13h11l3-9H6"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    left: '<path d="M20 12H4m6-6-6 6 6 6"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    bolt: '<path d="m13 2-9 12h7l-1 8L21 9h-8z"/>',
    truck:
        '<path d="M2 5h12v12H2zM14 9h4l4 5v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    shield:
        '<path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6z"/><path d="m8 12 3 3 5-6"/>',
    card: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 9h20M6 15h4"/>',
    headset:
        '<path d="M3 14v-3a9 9 0 0 1 18 0v7c0 3-4 4-7 4"/><rect x="2" y="11" width="5" height="8" rx="2"/><rect x="17" y="11" width="5" height="8" rx="2"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    trash: '<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',
    box: '<path d="m12 2 10 5-10 5L2 7zM2 7v10l10 5 10-5V7M12 12v10M7 4.5l10 5"/>',
    user: '<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7v.1"/>',
    pix: '<path d="m12 2 10 10-10 10L2 12zM7 8l5 5 5-5M7 16l5-5 5 5"/>',
    document: '<path d="M6 2h9l4 4v16H6zM14 2v5h5M9 11h7M9 15h7M9 18h4"/>',
};
const icon = (name) =>
    `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.box}</svg>`;
const moeda = (v) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const esc = (v) =>
    String(v).replace(
        /[&<>"']/g,
        (c) =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
            c
            ],
    );
const productBySku = (sku) => produtos.find((p) => p.sku === sku);
const cardPrice = (p) => Math.round((p.preco / 0.9) * 100) / 100;
function readLocal(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}
function writeLocal(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch { }
}
const savedCart = readLocal("overclock.cart", []);
let carrinho = Array.isArray(savedCart)
    ? savedCart
        .filter(
            (x) => x && productBySku(x.sku) && Number.isInteger(x.qtd) && x.qtd > 0,
        )
        .reduce((a, x) => {
            const previous = a.find((y) => y.sku === x.sku);
            if (previous)
                previous.qtd = Math.min(
                    previous.qtd + x.qtd,
                    productBySku(x.sku).stock,
                );
            else
                a.push({
                    sku: x.sku,
                    qtd: Math.min(x.qtd, productBySku(x.sku).stock),
                });
            return a;
        }, [])
    : [];
const savedFav = readLocal("overclock.favoritos", []);
const favoritos = new Set(
    Array.isArray(savedFav) ? savedFav.filter((s) => productBySku(s)) : [],
);
const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;
const content = document.getElementById("conteudo");
let toastTimer;
let produtoQtd = 1;
let shipping = 0;
let payment = "pix";
function notify(message, cartLink = false) {
    const el = document.getElementById("toast");
    el.innerHTML =
        esc(message) +
        (cartLink ? '<a href="carrinho.html">Ver carrinho →</a>' : "");
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 4000);
}
function totals() {
    const pix = carrinho.reduce(
        (s, x) => s + productBySku(x.sku).preco * x.qtd,
        0,
    );
    const card = carrinho.reduce(
        (s, x) => s + cardPrice(productBySku(x.sku)) * x.qtd,
        0,
    );
    return { pix, card, count: carrinho.reduce((s, x) => s + x.qtd, 0) };
}
function persistCart() {
    writeLocal("overclock.cart", carrinho);
    updateHeader();
}
function add(sku, qtd = 1) {
    const p = productBySku(sku);
    if (!p) return false;
    const old = carrinho.find((x) => x.sku === sku);
    if ((old?.qtd || 0) + qtd > p.stock) {
        notify(`Limite de ${p.stock} unidades deste produto.`);
        return false;
    }
    if (old) old.qtd += qtd;
    else carrinho.push({ sku, qtd });
    persistCart();
    notify("Produto adicionado ao carrinho.", true);
    return true;
}
function updateHeader() {
    const t = totals();
    const c = document.getElementById("contador");
    if (c) c.textContent = t.count;
    const sum = document.getElementById("total");
    if (sum) sum.textContent = moeda(t.pix);
    const favCount = document.getElementById("favCount");
    if (favCount)
        favCount.textContent = favoritos.size
            ? `${favoritos.size} salvo${favoritos.size > 1 ? "s" : ""}`
            : "Seus favoritos";
    const cart = document.getElementById("cartHeader");
    if (cart)
        cart.setAttribute(
            "aria-label",
            `Carrinho com ${t.count} ${t.count === 1 ? "item" : "itens"}, ${moeda(t.pix)}`,
        );
}
function logo() {
    return '<span class="logo-symbol"><svg viewBox="0 0 40 48" aria-hidden="true"><path d="M25 0 3 28h15l-5 20 25-31H22z"/></svg></span><span class="wordmark">OVERCLOCK</span>';
}
function header() {
    document.getElementById("header").innerHTML =
        `<header class="cabecalho"><div class="container header-main"><a href="index.html" class="logo" aria-label="Overclock, página inicial">${logo()}</a><form class="busca" id="formBusca" role="search" action="catalogo.html"><input type="search" name="q" id="campoBusca" placeholder="O que você está procurando?" aria-label="Buscar produtos" value="${esc(params.get("q") || "")}"><button type="submit" aria-label="Buscar">${icon("search")}</button></form><div class="header-actions"><button class="header-action support" data-help>${icon("headset")}<span class="action-label">Precisa de ajuda?<strong>Atendimento</strong></span></button><a href="favoritos.html" class="header-action" aria-label="Meus favoritos">${icon("heart")}<span class="action-label">Meus favoritos<strong id="favCount">Seus favoritos</strong></span></a><a href="carrinho.html" id="cartHeader" class="header-action">${icon("cart")}<span class="cart-count" id="contador">0</span><span class="action-label">Meu carrinho<strong id="total">R$ 0,00</strong></span></a></div></div></header><nav class="menu" aria-label="Departamentos"><div class="container"><a class="all-depts" href="catalogo.html">${icon("menu")} DEPARTAMENTOS</a><a href="catalogo.html?categoria=Notebooks">NOTEBOOKS</a><a href="catalogo.html?categoria=Monitores">MONITORES</a><a href="catalogo.html?categoria=Acess%C3%B3rios">PERIFÉRICOS</a><a href="catalogo.html?categoria=Smartphones">SMARTPHONES</a><a class="active" href="index.html#destaques">${icon("bolt")} OFERTAS</a><span class="nav-last">TECNOLOGIA PARA IR ALÉM</span></div></nav>`;
    updateHeader();
}
function footer() {
    document.getElementById("footer").innerHTML =
        `<section class="newsletter"><div class="container"><div><h3>Seu próximo upgrade começa aqui.</h3><p>Novidades e ofertas para seu próximo upgrade.</p></div><form id="formNews"><input type="email" id="emailNews" placeholder="Seu melhor e-mail" aria-label="E-mail para novidades" required maxlength="150"><button class="primary" type="submit">QUERO RECEBER ${icon("arrow")}</button></form><span class="newsletter-feedback" id="mensagem" role="status" hidden></span></div></section><footer class="rodape"><div class="container"><div class="footer-grid"><div><a class="logo" href="index.html" aria-label="Overclock">${logo()}</a><p>Tecnologia que conecta você ao que vem a seguir. Uma seleção de eletrônicos para trabalhar, jogar e ir além.</p></div><div><h4>Explore a loja</h4><a href="catalogo.html">Todos os produtos</a><a href="catalogo.html?categoria=Notebooks">Notebooks</a><a href="catalogo.html?categoria=Monitores">Monitores</a><a href="catalogo.html?categoria=Acess%C3%B3rios">Acessórios</a></div><div><h4>Sua experiência</h4><a href="carrinho.html">Meu carrinho</a><a href="favoritos.html">Meus favoritos</a><button data-help>Central de ajuda</button><button data-help>Como comprar</button></div><div><h4>Formas de pagamento</h4><div class="payment-brands"><b>◈ PIX</b><b>VISA</b><b>mastercard</b><b>BOLETO</b></div><p>Até 10x sem juros no cartão.<br>10% de desconto no Pix.</p></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Overclock. Todos os direitos reservados.</span></div></div></footer>`;
}
function breadcrumb(last, category = "") {
    return `<div class="breadcrumb"><a href="index.html">Início</a>${icon("chevron")}${category ? `<a href="catalogo.html?categoria=${encodeURIComponent(category)}">${esc(category)}</a>${icon("chevron")}` : ""}<span>${esc(last)}</span></div>`;
}
function productCard(p) {
    return `<article class="produto"><button class="favorito${favoritos.has(p.sku) ? " ativo" : ""}" data-fav="${p.sku}" aria-label="${favoritos.has(p.sku) ? "Remover dos" : "Adicionar aos"} favoritos: ${esc(p.nome)}" aria-pressed="${favoritos.has(p.sku)}">${icon("heart")}</button><a class="produto-imagem" href="produto.html?sku=${p.sku}" aria-label="Ver ${esc(p.nome)}"><span class="selo">${p.selo}</span><img src="assets/${p.imagem}.svg" alt="${esc(p.nome)}" loading="lazy" width="720" height="540"></a><div class="sku">${p.categoria.toUpperCase()} • ${p.sku}</div><h3><a href="produto.html?sku=${p.sku}">${p.nome}</a></h3><div class="estrelas" aria-label="Avaliação: ${p.nota} de 5"><b aria-hidden="true">★★★★★</b><span>(${p.nota})</span></div><div class="product-pricing"><div class="de">De ${moeda(p.de)}</div><div class="preco">${moeda(p.preco)}</div><div class="pix-info">à vista no Pix com 10% de desconto</div><div class="parcela">ou <strong>${moeda(cardPrice(p))}</strong> em até<br><strong>${p.parcelas}x de ${moeda(cardPrice(p) / p.parcelas)}</strong> sem juros</div><button class="buy" data-add="${p.sku}">${icon("cart")} ADICIONAR AO CARRINHO</button><div class="stock-line">Disponível para seu próximo upgrade</div></div></article>`;
}
function home() {
    content.innerHTML = `<section class="hero-wrap"><div class="container hero"><div class="hero-text"><div class="eyebrow">SELEÇÃO OVERCLOCK • POUCAS E BOAS OFERTAS</div><h1>O PRÓXIMO NÍVEL<br>DO SEU <em>SETUP.</em></h1><p>Mais desempenho. Mais possibilidades.<br>Tecnologia selecionada com o preço que você procura.</p><div class="hero-actions"><a href="#destaques" class="primary">ENCONTRE SEU UPGRADE ${icon("arrow")}</a><span class="hero-note">ATÉ 10X SEM JUROS</span></div></div><div class="hero-visual" aria-hidden="true"><div class="hero-glow"></div><img src="assets/notebook.svg" alt="" width="720" height="540"><img class="hero-headphone" src="assets/audio.svg" alt="" width="720" height="540"><div class="hero-tag">PERFORMANCE SEM LIMITES<b>PLAY. WORK. REPEAT.</b></div><div class="hero-bottom">OVERCLOCK / SELEÇÃO TECH</div></div></div></section><div class="container"><section class="beneficios" aria-label="Condições da loja"><div class="beneficio">${icon("pix")}<div><b>10% de desconto no Pix</b><span>Seu upgrade por menos</span></div></div><div class="beneficio">${icon("card")}<div><b>Até 10x sem juros</b><span>Facilidade no pagamento</span></div></div><div class="beneficio">${icon("truck")}<div><b>Frete padrão grátis</b><span>Em compras a partir de R$ 199</span></div></div><div class="beneficio">${icon("shield")}<div><b>Escolha com confiança</b><span>Veja os detalhes de cada produto</span></div></div></section><section class="home-section" id="departamentos"><div class="section-heading"><h2>ENCONTRE SEU DEPARTAMENTO</h2><a href="catalogo.html">Explorar todos ${icon("arrow")}</a></div><div class="departamentos" id="departamentosGrade">${departamentos.map((d) => `<a class="departamento" href="catalogo.html?categoria=${encodeURIComponent(d.filtro || d.nome)}"><img src="assets/${d.imagem}.svg" alt="" width="720" height="540"><strong>${d.nome}</strong><span>Explore a seleção</span></a>`).join("")}</div></section><section class="home-section" id="destaques"><div class="section-heading"><div><h2>${icon("bolt")} OFERTAS EM DESTAQUE</h2><p>Uma seleção enxuta. Grandes possibilidades.</p></div><a href="catalogo.html">Ver todos os produtos ${icon("arrow")}</a></div><div class="product-grid" id="produtos">${[produtos[1], produtos[4], produtos[2], produtos[5]].map(productCard).join("")}</div></section><section class="editorial"><div><div class="eyebrow">DO TRABALHO AO PLAY</div><h3>O setup certo faz toda a diferença.</h3><p>Encontre os detalhes que faltam para deixar tudo do seu jeito.</p></div><a class="secondary" href="catalogo.html">EXPLORAR A LOJA ${icon("arrow")}</a></section></div>`;
}
function emptyState(title, text, kind = "box") {
    return `<div class="empty">${icon(kind)}<h2>${title}</h2><p>${text}</p><a class="primary" href="catalogo.html">EXPLORAR PRODUTOS ${icon("arrow")}</a></div>`;
}
function catalog() {
    const term = (params.get("q") || "").trim();
    const category = params.get("categoria") || "";
    content.innerHTML = `<div class="container page">${breadcrumb("Todos os produtos")}<h1 class="page-title">${icon("box")} ${term ? "RESULTADOS DA BUSCA" : "EXPLORE A LOJA"}</h1><p class="page-subtitle">${term ? `Buscando por “${esc(term)}”` : "Tecnologia selecionada para o seu dia a dia."}</p><div class="catalog-layout"><aside class="filter-panel" aria-label="Filtrar produtos"><h3>Departamentos</h3>${[{ nome: "Todos os produtos", filtro: "" }, ...departamentos].map((d) => `<label class="filter-option"><input type="radio" name="categoria" value="${esc(d.filtro ?? d.nome)}" ${(d.filtro ?? d.nome) === category ? "checked" : ""}>${d.nome}</label>`).join("")}<button class="reset" id="resetFilters">Limpar filtros</button></aside><section><div class="catalog-toolbar"><span id="resultsCount"></span><label>Ordenar: <select id="sort" aria-label="Ordenar produtos"><option value="default">Relevância</option><option value="low">Menor preço</option><option value="high">Maior preço</option><option value="name">Nome do produto</option></select></label></div><div class="product-grid catalog-grid" id="produtos"></div></section></div></div>`;
    const render = () => {
        let list = produtos.filter(
            (p) =>
                (!category || p.categoria === category) &&
                `${p.nome} ${p.categoria} ${p.sku}`
                    .toLocaleLowerCase("pt-BR")
                    .includes(term.toLocaleLowerCase("pt-BR")),
        );
        const sort = document.getElementById("sort").value;
        if (sort === "low") list.sort((a, b) => a.preco - b.preco);
        if (sort === "high") list.sort((a, b) => b.preco - a.preco);
        if (sort === "name") list.sort((a, b) => a.nome.localeCompare(b.nome));
        document.getElementById("resultsCount").textContent =
            `${list.length} produto${list.length === 1 ? "" : "s"} encontrado${list.length === 1 ? "" : "s"}`;
        document.getElementById("produtos").innerHTML = list.length
            ? list.map(productCard).join("")
            : emptyState(
                "Nenhum produto encontrado",
                "Tente outro termo ou explore todos os departamentos.",
                "search",
            );
    };
    document.getElementById("sort").addEventListener("change", render);
    document.querySelectorAll('input[name="categoria"]').forEach((el) =>
        el.addEventListener("change", () => {
            const next = new URLSearchParams(location.search);
            el.value ? next.set("categoria", el.value) : next.delete("categoria");
            location.href = "catalogo.html?" + next;
        }),
    );
    document.getElementById("resetFilters").onclick = () =>
        (location.href = "catalogo.html");
    render();
}
function quantityControls(value, sku = "", max = 99) {
    return `<div class="qty" aria-label="Quantidade"><button data-qty="-1" ${sku ? `data-sku="${sku}"` : ""} aria-label="Diminuir quantidade" ${value <= 1 ? "disabled" : ""}>−</button><output aria-live="polite">${value}</output><button data-qty="1" ${sku ? `data-sku="${sku}"` : ""} aria-label="Aumentar quantidade" ${value >= max ? "disabled" : ""}>+</button></div>`;
}
function productPage() {
    const p = productBySku(params.get("sku"));
    if (!p) {
        content.innerHTML = `<div class="container page">${emptyState("Produto não encontrado", "Esse produto não está disponível no catálogo.")}</div>`;
        return;
    }
    document.title = p.nome + " | Overclock";
    content.innerHTML = `<div class="container page">${breadcrumb(p.nome, p.categoria)}<div class="product-detail"><div class="gallery"><span class="selo">${p.selo}</span><img src="assets/${p.imagem}.svg" width="720" height="540" alt="${esc(p.nome)}"></div><div class="product-info"><div class="sku">CÓDIGO: ${p.sku} <span class="availability">● EM ESTOQUE</span></div><h1>${p.nome}</h1><div class="estrelas"><b>★★★★★</b><span>${p.nota} de 5</span></div><div class="purchase-box"><div class="de">De ${moeda(p.de)}</div><div class="preco">${moeda(p.preco)}</div><div class="pix-info">à vista no Pix com 10% de desconto</div><div class="parcela">Ou <strong>${moeda(cardPrice(p))}</strong> em até <strong>${p.parcelas}x de ${moeda(cardPrice(p) / p.parcelas)}</strong> sem juros no cartão</div><div class="purchase-actions"><div id="productQty">${quantityControls(produtoQtd, "", p.stock)}</div><button class="primary" id="buyNow">${icon("bolt")} COMPRAR AGORA</button></div><button class="secondary full-width" id="productAdd">${icon("cart")} ADICIONAR AO CARRINHO</button><div class="shipping-box"><form id="shippingForm"><label for="cep">${icon("truck")} Calcule o frete e o prazo</label><div class="cep-row"><input id="cep" inputmode="numeric" autocomplete="postal-code" maxlength="9" placeholder="Digite seu CEP" aria-label="CEP para calcular frete" required pattern="[0-9]{5}-?[0-9]{3}"><button type="submit">CALCULAR</button></div><p class="freight-result" id="freight" role="status" hidden></p></form></div></div></div></div><section class="details-panel"><div class="tabs" role="tablist" aria-label="Informações do produto"><button id="tabDesc" class="active" role="tab" aria-selected="true" aria-controls="description">DESCRIÇÃO</button><button id="tabSpecs" role="tab" aria-selected="false" aria-controls="specifications" tabindex="-1">ESPECIFICAÇÕES</button></div><div id="description" role="tabpanel" aria-labelledby="tabDesc"><h3>Seu próximo upgrade está aqui.</h3><p>${p.descricao}</p></div><div id="specifications" role="tabpanel" aria-labelledby="tabSpecs" hidden><table class="spec-table"><tbody>${Object.entries(
        p.specs,
    )
        .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
        .join(
            "",
        )}<tr><td>Código do produto</td><td>${p.sku}</td></tr></tbody></table></div></section></div>`;
    document.getElementById("productAdd").onclick = () => add(p.sku, produtoQtd);
    document.getElementById("buyNow").onclick = () => {
        if (add(p.sku, produtoQtd)) location.href = "carrinho.html";
    };
    document.getElementById("shippingForm").onsubmit = (e) => {
        e.preventDefault();
        const result = document.getElementById("freight");
        result.hidden = false;
        result.textContent =
            "Frete padrão grátis • estimativa de 5 a 8 dias úteis.";
    };
    document.getElementById("cep").oninput = () =>
        (document.getElementById("freight").hidden = true);
    const tabs = [
        document.getElementById("tabDesc"),
        document.getElementById("tabSpecs"),
    ];
    const setTab = (idx) => {
        tabs.forEach((tab, i) => {
            tab.classList.toggle("active", i === idx);
            tab.setAttribute("aria-selected", i === idx);
            tab.tabIndex = i === idx ? 0 : -1;
        });
        document.getElementById("description").hidden = idx !== 0;
        document.getElementById("specifications").hidden = idx !== 1;
    };
    tabs.forEach((t, i) => {
        t.onclick = () => setTab(i);
        t.onkeydown = (e) => {
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const idx = e.key === "Home" ? 0 : e.key === "End" ? 1 : 1 - i;
                setTab(idx);
                tabs[idx].focus();
            }
        };
    });
}
function summaryHTML(checkout = false) {
    const t = totals();
    const base = checkout && payment === "card" ? t.card : t.pix;
    const freight = shipping || 0;
    return `<h2>Resumo do pedido</h2><div class="summary-row"><span>Produtos (${t.count} ${t.count === 1 ? "item" : "itens"})</span><b>${moeda(t.card)}</b></div><div class="summary-row"><span>Desconto ${payment === "boleto" && checkout ? "à vista" : "no Pix"}</span><b class="green">${checkout && payment === "card" ? "—" : "− " + moeda(t.card - t.pix)}</b></div><div class="summary-row"><span>Frete ${freight ? "expresso" : "padrão"}</span><b class="green">${freight ? moeda(freight) : "Grátis"}</b></div><div class="summary-row summary-total"><span>Total ${checkout && payment === "card" ? "no cartão" : "à vista"}</span><strong>${moeda(base + freight)}</strong></div>${checkout && payment === "card" ? `<p class="summary-notice">Parcelas disponíveis: ${checkoutInstallments(base + freight)}</p>` : `<p class="summary-notice">No cartão: ${moeda(t.card + freight)}<br>${checkoutInstallments(t.card + freight)}</p>`}${checkout ? "" : `<a href="checkout.html" class="primary">FINALIZAR COMPRA ${icon("arrow")}</a>`}`;
}
function checkoutInstallments(total) {
    const n = Math.min(...carrinho.map((x) => productBySku(x.sku).parcelas));
    return `até ${n}x de ${moeda(total / n)} sem juros`;
}
function cartPage() {
    const t = totals();
    content.innerHTML = `<div class="container page">${breadcrumb("Meu carrinho")}<h1 class="page-title">${icon("cart")} MEU CARRINHO</h1><p class="page-subtitle">Seu próximo upgrade está a poucos passos.</p>${!carrinho.length
            ? emptyState(
                "Seu carrinho está vazio",
                "Explore a loja e encontre o seu próximo upgrade.",
                "cart",
            )
            : `<div class="cart-layout"><div><div class="cart-table"><div class="cart-table-heading"><span>PRODUTO</span><span>QUANTIDADE</span><span>VALOR NO PIX</span></div>${carrinho
                .map((x) => {
                    const p = productBySku(x.sku);
                    return `<article class="cart-item"><div class="cart-item-main"><a href="produto.html?sku=${p.sku}"><img src="assets/${p.imagem}.svg" alt="${esc(p.nome)}" width="720" height="540"></a><div><div class="sku">${p.sku}</div><h3><a href="produto.html?sku=${p.sku}">${p.nome}</a></h3><button class="remove" data-remove="${p.sku}" aria-label="Remover ${esc(p.nome)}">${icon("trash")} Remover produto</button></div></div>${quantityControls(x.qtd, x.sku, p.stock)}<div class="line-price">${moeda(p.preco * x.qtd)}<small>${moeda(p.preco)} / unidade</small></div></article>`;
                })
                .join(
                    "",
                )}</div><div class="cart-bottom"><a href="catalogo.html">${icon("left")} Continuar comprando</a><button class="text-button" id="clearCart">Esvaziar carrinho</button></div><div class="info-strip">${icon("truck")} Seu pedido tem frete padrão grátis. Confira as opções de entrega na finalização.</div></div><aside class="order-summary">${summaryHTML()}</aside></div>`
        }</div>`;
    const clear = document.getElementById("clearCart");
    if (clear)
        clear.onclick = () => {
            carrinho = [];
            persistCart();
            cartPage();
            notify("Carrinho esvaziado.");
        };
}
function favoritesPage() {
    const list = produtos.filter((p) => favoritos.has(p.sku));
    content.innerHTML = `<div class="container page">${breadcrumb("Meus favoritos")}<h1 class="page-title">${icon("heart")} MEUS FAVORITOS</h1><p class="page-subtitle">Seus próximos upgrades, guardados em um só lugar.</p>${list.length ? `<div class="product-grid">${list.map(productCard).join("")}</div>` : emptyState("Sua lista está esperando por você", "Toque no coração de um produto para salvá-lo aqui.", "heart")}</div>`;
}
function checkoutPage() {
    if (!carrinho.length) {
        content.innerHTML = `<div class="container page">${breadcrumb("Finalizar compra")}${emptyState("Escolha seu próximo upgrade", "Adicione produtos ao carrinho antes de finalizar.", "cart")}</div>`;
        return;
    }
    content.innerHTML = `<div class="container page">${breadcrumb("Finalizar compra")}<h1 class="page-title">FINALIZAR COMPRA</h1><div class="steps"><span><b>✓</b>Carrinho</span>${icon("chevron")}<span class="current"><b>2</b>Finalização</span>${icon("chevron")}<span><b>3</b>Confirmação</span></div><form id="checkoutForm"><div class="checkout-layout"><div><section class="form-card"><h2>${icon("user")} Seus dados</h2><div class="fields"><label class="field">Nome completo<input name="nome" required minlength="3" maxlength="100" placeholder="Ex.: João da Silva" autocomplete="off"></label><label class="field">E-mail<input type="email" name="email" required maxlength="150" placeholder="Ex.: joao@exemplo.com" autocomplete="off"></label></div></section><section class="form-card"><h2>${icon("pin")} Endereço de entrega</h2><div class="fields"><label class="field">CEP<input name="cep" inputmode="numeric" required pattern="[0-9]{5}-?[0-9]{3}" maxlength="9" placeholder="00000-000" autocomplete="off"></label><label class="field">Estado<select name="uf" required><option value="">Selecione</option>${["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"].map((s) => `<option>${s}</option>`).join("")}</select></label><label class="field wide">Rua / Avenida<input name="rua" required minlength="3" maxlength="150" placeholder="Nome da rua" autocomplete="off"></label><label class="field">Número<input name="numero" required maxlength="15" placeholder="123 ou S/N" autocomplete="off"></label><label class="field">Complemento (opcional)<input name="complemento" maxlength="100" placeholder="Apartamento, bloco..." autocomplete="off"></label><label class="field">Bairro<input name="bairro" required minlength="2" maxlength="80" autocomplete="off"></label><label class="field">Cidade<input name="cidade" required minlength="2" maxlength="80" autocomplete="off"></label></div></section><section class="form-card"><h2>${icon("truck")} Forma de entrega</h2><label class="shipping-option"><input type="radio" name="frete" value="0" checked> Padrão • 5 a 8 dias úteis <b class="green">Grátis</b></label><label class="shipping-option"><input type="radio" name="frete" value="29.9"> Expresso • 2 a 3 dias úteis <b>${moeda(29.9)}</b></label></section><section class="form-card"><h2>${icon("card")} Forma de pagamento</h2><div class="payment-options"><label class="payment-option"><input type="radio" name="pagamento" value="pix" checked>${icon("pix")} Pix</label><label class="payment-option"><input type="radio" name="pagamento" value="card">${icon("card")} Cartão</label><label class="payment-option"><input type="radio" name="pagamento" value="boleto">${icon("document")} Boleto</label></div><p class="payment-help" id="paymentHelp">10% de desconto no pagamento à vista com Pix.</p></section></div><aside class="order-summary"><div id="checkoutSummary">${summaryHTML(true)}</div><button type="submit" class="primary full-width" id="finishOrder">CONCLUIR PEDIDO ${icon("check")}</button><a href="carrinho.html" class="secondary full-width" style="margin-top:13px">VOLTAR AO CARRINHO</a></aside></div></form></div>`;
    document.getElementById("checkoutForm").addEventListener("change", (e) => {
        if (e.target.name === "frete") shipping = Number(e.target.value);
        if (e.target.name === "pagamento") {
            payment = e.target.value;
            document.getElementById("paymentHelp").textContent =
                payment === "pix"
                    ? "10% de desconto no pagamento à vista com Pix."
                    : payment === "card"
                        ? "Confira as opções de parcelamento no resumo do pedido."
                        : "Pagamento à vista com boleto bancário.";
        }
        document.getElementById("checkoutSummary").innerHTML = summaryHTML(true);
    });
    document.getElementById("checkoutForm").onsubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        for (const name of ["nome", "rua", "numero", "bairro", "cidade"]) {
            const field = form.elements.namedItem(name);
            if (!field.value.trim()) {
                field.setCustomValidity("Preencha este campo.");
                field.reportValidity();
                field.addEventListener("input", () => field.setCustomValidity(""), {
                    once: true,
                });
                return;
            }
        }
        document.getElementById("finishOrder").disabled = true;
        const t = totals();
        const total = (payment === "card" ? t.card : t.pix) + shipping;
        const number = "OC-" + Date.now().toString(36).toUpperCase();
        const payName = { pix: "Pix", card: "Cartão", boleto: "Boleto" }[payment];
        carrinho = [];
        persistCart();
        content.innerHTML = `<div class="container page"><div class="confirmation"><div class="confirm-icon">${icon("check")}</div><div class="eyebrow" style="justify-content:center">RESUMO DO PEDIDO</div><h1>Confira seu pedido</h1><div class="order-number">${number}</div><div class="summary-row"><span>Quantidade de produtos</span><b>${t.count}</b></div><div class="summary-row"><span>Pagamento selecionado</span><b>${payName}</b></div><div class="summary-row"><span>Total do pedido</span><b>${moeda(total)}</b></div><a class="primary" href="catalogo.html">VOLTAR À LOJA ${icon("arrow")}</a></div></div>`;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}
header();
footer();
(
    ({
        home,
        catalogo: catalog,
        produto: productPage,
        carrinho: cartPage,
        favoritos: favoritesPage,
        checkout: checkoutPage,
    })[page] || home
)();
document.addEventListener("click", (e) => {
    const help = e.target.closest("[data-help]");
    if (help) {
        document.getElementById("help").showModal();
        return;
    }
    const fav = e.target.closest("[data-fav]");
    if (fav) {
        const sku = fav.dataset.fav;
        favoritos.has(sku) ? favoritos.delete(sku) : favoritos.add(sku);
        writeLocal("overclock.favoritos", [...favoritos]);
        updateHeader();
        const active = favoritos.has(sku);
        fav.classList.toggle("ativo", active);
        fav.setAttribute("aria-pressed", active);
        fav.setAttribute(
            "aria-label",
            `${active ? "Remover dos" : "Adicionar aos"} favoritos: ${productBySku(sku).nome}`,
        );
        if (page === "favoritos") favoritesPage();
        notify(
            active
                ? "Produto salvo nos favoritos."
                : "Produto removido dos favoritos.",
        );
        return;
    }
    const addButton = e.target.closest("[data-add]");
    if (addButton) {
        add(addButton.dataset.add);
        return;
    }
    const remove = e.target.closest("[data-remove]");
    if (remove) {
        carrinho = carrinho.filter((x) => x.sku !== remove.dataset.remove);
        persistCart();
        cartPage();
        notify("Produto removido do carrinho.");
        return;
    }
    const qty = e.target.closest("[data-qty]");
    if (qty) {
        const delta = Number(qty.dataset.qty);
        if (qty.dataset.sku) {
            const x = carrinho.find((x) => x.sku === qty.dataset.sku);
            if (!x) return;
            x.qtd = Math.max(1, Math.min(productBySku(x.sku).stock, x.qtd + delta));
            persistCart();
            cartPage();
        } else {
            const p = productBySku(params.get("sku"));
            produtoQtd = Math.max(1, Math.min(p.stock, produtoQtd + delta));
            document.getElementById("productQty").innerHTML = quantityControls(
                produtoQtd,
                "",
                p.stock,
            );
        }
    }
});
document.querySelector("#help .close").onclick = () =>
    document.getElementById("help").close();
document.getElementById("help").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        const r = e.currentTarget.getBoundingClientRect();
        if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
        )
            e.currentTarget.close();
    }
});
document.getElementById("formNews").onsubmit = (e) => {
    e.preventDefault();
    writeLocal("overclock.newsletter", true);
    const message = document.getElementById("mensagem");
    message.textContent =
        "Interesse registrado. Obrigado por acompanhar a Overclock!";
    message.hidden = false;
    e.target.hidden = true;
};
window.addEventListener("storage", (e) => {
    if (["overclock.cart", "overclock.favoritos"].includes(e.key))
        location.reload();
});
