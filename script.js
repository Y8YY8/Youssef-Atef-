const products = [
    {
        brand: "نسلة (Nestlé)",
        items: [
            { name: "نسلة 600 مللى (كرتونة)", code: "6223001930556" },
            { name: "نسلة لتر ونصف (كرتونة)", code: "6223001930518" }
        ]
    },
    {
        brand: "بيوفانا (Pifana)",
        items: [
            { name: "بيوفانا 600 مللى (كرتونة)", code: "6224009169511" },
            { name: "بيوفانا لتر ونصف (كرتونة)", code: "6224009619528" },
            { name: "بيوفانا 330 مللى (قطعة واحدة)", code: "066157" }
        ]
    },
    {
        brand: "دسانى (Dasani)",
        items: [
            { name: "دسانى 600 مللى (كرتونة)", code: "6224000557171" },
            { name: "دسانى لتر ونصف (كرتونة)", code: "6224000557188" }
        ]
    },
    {
        brand: "ايلانو (Elano)",
        items: [
            { name: "ايلانو 600 مللى (كرتونة)", code: "6225000378896" },
            { name: "ايلانو لتر ونصف (كرتونة)", code: "6225000378865" }
        ]
    },
    {
        brand: "اكوافينا (Aquafina)",
        items: [
            { name: "اكوافينا 330 مللى (قطعة واحدة)", code: "6223001365372" }
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
                <div class="product-image"></div>
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