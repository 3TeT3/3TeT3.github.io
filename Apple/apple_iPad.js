let productArray = //JSON.parse(xhr.response)
    [
        {
            productName: 'iPad',
            baseImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=450&hei=523&fmt=jpeg&qlt=95&.v=1630973863000',
            basePrice: 10500,
            specArray: [ //Specification
                {
                    title: "外觀",
                    key: 'color',
                    options: [
                        { data: '#777', description: '太空灰色', ColorImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-space-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1631308881000',},
                        { data: '#ddd', description: '銀色', ColorImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-silver-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1631308880000'},
                    ],
                    choosed: null,
                    changePrice: false,
                    changeImg: true,
                },
                {
                    title: '儲存裝置',
                    key: 'storage',
                    options: [
                        { data: '64GB', extraPrice: 0, },
                        { data: '256GB', extraPrice: 4500, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
                {
                    title: '連線能力',
                    key: 'network',
                    options: [
                        { data: 'Wi-Fi', extraPrice: 0, },
                        { data: 'Wi-Fi + 行動網路', extraPrice: 4000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
            ],
        },
        {
            productName: 'iPad Air',
            baseImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-202203?wid=1765&hei=2000&fmt=jpeg&qlt=95&.v=1645665079887',
            basePrice: 17900,
            specArray: [ //Specification
                {
                    title: "外觀",
                    key: 'color',
                    options: [
                        { data: '#636363', description: '太空灰色', ColorImg:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066742664'},
                        { data: '#FFBFBF', description: '粉紅色', ColorImg:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-pink-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066399526'},
                        { data: '#B8B8FF', description: '紫色', ColorImg:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066730601'},
                        { data: '#00E0E0', description: '藍色', ColorImg:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645065732688'},
                        { data: '#FFE8BF', description: '星光色', ColorImg:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-starlight-202203?wid=470&hei=556&fmt=png-alpha&.v=1645895139236'},
                    ],
                    choosed: null,
                    changePrice: false,
                    changeImg: true,
                },
                {
                    title: '儲存裝置',
                    key: 'storage',
                    options: [
                        { data: '64GB', extraPrice: 0, },
                        { data: '256GB', extraPrice: 5000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
                {
                    title: '連線能力',
                    key: 'network',
                    options: [
                        { data: 'Wi-Fi', extraPrice: 0, },
                        { data: 'Wi-Fi + 行動網路', extraPrice: 5000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
            ],
        },
    ]