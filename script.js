const products = [
    {
        brand: "نسلة (Nestlé)",
        items: [
            { name: "نسلة 600 مللى (كرتونة)", code: "6223001930556", img: "https://images.kg.asda.com/retail/724/511/5011013724511.jpg" },
            { name: "نسلة لتر ونصف (كرتونة)", code: "6223001930518", img: "https://m.media-amazon.com/images/I/51uG98Y2S7L._AC_SL1000_.jpg" }
        ]
    },
    {
        brand: "بيوفانا (Pifana)",
        items: [
            { name: "بيوفانا 600 مللى (كرتونة)", code: "6224009169511", img: "https://m.media-amazon.com/images/I/41-lMscy0hL._AC_.jpg" },
            { name: "بيوفانا لتر ونصف (كرتونة)", code: "6224009619528", img: "https://m.media-amazon.com/images/I/41-lMscy0hL._AC_.jpg" },
            { name: "بيوفانا 330 مللى (قطعة واحدة)", code: "066157", img: "https://m.media-amazon.com/images/I/41-lMscy0hL._AC_.jpg" }
        ]
    },
    {
        brand: "دسانى (Dasani)",
        items: [
            { name: "دسانى 600 مللى (كرتونة)", code: "6224000557171", img: "https://m.media-amazon.com/images/I/51w7Y6R-vRL._AC_SL1000_.jpg" },
            { name: "دسانى لتر ونصف (كرتونة)", code: "6224000557188", img: "https://m.media-amazon.com/images/I/41-lMscy0hL._AC_.jpg" }
        ]
    },
    {
        brand: "ايلانو (Elano)",
        items: [
            { name: "ايلانو 600 مللى (كرتونة)", code: "6225000378896", img: "https://m.media-amazon.com/images/I/41-lMscy0hL._AC_.jpg" },
            { name: "ايلانو لتر ونصف (كرتونة)", code: "6225000378865", img: "https://m.media-amazon.com/images/I/41-lMscy0hL._AC_.jpg" }
        ]
    },
    {
        brand: "اكوافينا (Aquafina)",
        items: [
            { name: "اكوافينا 330 مللى (قطعة واحدة)", code: "6223001365372", img: "https://m.media-amazon.com/images/I/51Z2U4G+xAL._AC_SL1000_.jpg" }
        ]
    }
];

function renderApp() {
    const app = document.getElementById('app');
    
    products.forEach(brandGroup => {
        const section = document.createElement('section');
        section.className = 'brand-section';
        
        const brandTitle = document.createElement('div');
        brandTitle.className = 'brand-name';
        brandTitle.textContent = brandGroup.brand;
        section.appendChild(brandTitle);
        
        const grid = document.createElement('div');
        grid.className = 'products-grid';
        
        brandGroup.items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/80?text=H2O'">
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-code">${product.code}</div>
                </div>
                <button class="copy-btn" onclick="copyToClipboard('${product.code}')">نسخ</button>
            `;
            grid.appendChild(card);
        });
        
        section.appendChild(grid);
        app.appendChild(section);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', renderApp);