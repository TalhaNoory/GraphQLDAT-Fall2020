module.exports = {
    // Selve ordren
    // orders: [{
    //     id: 'ckhd3ojw1000101l4cqyc93vn',
    //     handle: 1,
    //     userId: 'ckhd3p8rx000301l44l6hbscs',
    //     billingEmail: 'mail@mail.dk',
    //     billingName: 'Fornavn Efternavn',
    //     billingCompany: 'Firma 1',
    //     billingAddress: 'Firmavej 1',
    //     billingCity: 'Firmaby',
    //     billingPostCode: '0000',
    //     billingState: null,
    //     billingCountry: 'Danmark',
    //     shippingName: 'Fornavn Efternavn',
    //     shippingCompany: 'Firma 1',
    //     shippingAddress: 'Firmavej 1',
    //     shippingCity: 'Firmaby',
    //     shippingPostCode: '0000',
    //     shippingState: null,
    //     shippingCountry: 'Danmark',
    //     shippingDate: '2020-11-11',
    //     createdAt: '2020-11-10',
    //     updatedAt: '2020-11-10',
    // },],
    // // En one-to-many table, som forbinder en-til-mange varelinjer (orderLineList) med en ordre (orders)
    // orderLine: [{
    //     id: 'ckhd41hqa000701l49szfeba9',
    //     orderId: 'ckhd3ojw1000101l4cqyc93vn',
    //     orderLineId: 'ckhd41z1i000901l4fe2b4xw7',
    // },
    // {
    //     id: 'ckhd42h73000b01l46x5k25ka',
    //     orderId: 'ckhd3ojw1000101l4cqyc93vn',
    //     orderLineId: 'ckhd42r3o000d01l43hf28h6y',
    // },
    // ],
    // // De forskellige varelinjer i en ordre
    // orderLineList: [{
    //     id: 'ckhd41z1i000901l4fe2b4xw7',
    //     productId: 'ckes849yz000101md82djen90',
    //     title: 'Gulerødder',
    //     type: 'Vaskede',
    //     unit: 'kg',
    //     unitSize: 1,
    //     bulkUnit: 'Kasse',
    //     bulkSize: 10,
    //     price: 8.75,
    //     quantity: 5,
    // },
    // {
    //     id: 'ckhd41z1i000901l4fe2b4xw7',
    //     productId: 'ckesaa4b9000101md3iam519p',
    //     title: 'Kartofler',
    //     type: 'Nye kartofler',
    //     unit: 'kg',
    //     unitSize: 1,
    //     bulkUnit: 'Kasse',
    //     bulkSize: 10,
    //     price: 12.00,
    //     quantity: 2,
    // },
    // ],
    // user: [{
    //     id: 'ckf2aggbo000101ji0cs6hovq',
    //     name: 'Producent A',
    //     role: 'PRODUCER'
    // },
    // {
    //     id: 'ckhd3p8rx000301l44l6hbscs',
    //     name: 'Kunde A',
    //     role: 'CUSTOMER'
    // }
    // ],
    product: [
        {
            id: 'ckes849yz000101md82djen90',
            producerId: 'ckf2aggbo000101ji0cs6hovq',
            labels: ['Kartoffler', 'Gulerødder', 'Pilsner', 'Frankfurter', 'Æg', 'Granatæbler', 'Saftevand'],
            datasets: [{
                label: 'Amount sold in total',
                data: [
                    0,
                    10,
                    25,
                    20,
                    40,
                    17,
                    28,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        },
        {
            id: 'ckesaa4b9000101md3iam519p',
            producerId: 'ckf2aggbo000101ji0cs6hovq',
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Amount sold per day',
                data: [
                    0,
                    10,
                    25,
                    20,
                    40,
                    17,
                    28,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        },
        {
            id: 'ckesaa4b9000101md3iam519p',
            producerId: 'ckf2aggbo000101ji0cs6hovq',
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'kg sold per day',
                data: [
                    0,
                    10,
                    25,
                    20,
                    40,
                    17,
                    28,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        }

    ]
};

// module.exports = {
//     users: [
//         {
//             id: 'ckf2seoiubsevnobawobfbnew',
//             mail: 'Reiner@hotmail.com',
//             name: 'Kunde B',
//             role: 'COSTUMER'
//         },
//         {
//             id: 'ckf2aggbo000101ji0cs6hovq',
//             mail: 'ErenJaeegr@hotmail.com',
//             name: 'Producent A',
//             role: 'PRODUCER'
//         },
//         {
//             id: 'ckf2ahcl4000301jih9coc1if',
//             mail: 'NarutoUzumaki@gmail.com',
//             name: 'Producent B',
//             role: 'PRODUCER'
//         },
//         {
//             id: 'ckf2ahhsr000501jiexz4hfa9',
//             mail: 'Saitama@mail.com',
//             name: 'Producent C',
//             role: 'PRODUCER'
//         },
//         {
//             id: 'ckf2ahls0000701jick98er7i',
//             mail: 'Gatz@gmail.com',
//             name: 'Producent D',
//             role: 'PRODUCER'
//         },
//         {
//             id: 'ckf2ahphm000901ji4jdccjvu',
//             mail: 'LeviAckermann@hotmail.com',
//             name: 'Kunde A',
//             role: 'CUSTOMER'
//         },
//     ],
//     products: [
//         {
//             id: 'ckes849yz000101md82djen90',
//             producer: 'Producent A',
//             title: 'Gulerødder',
//             type: 'Vaskede',
//             image: 'https://raahandel.dk/wp-content/uploads/2019/09/DSC07878.jpg',
//             category: 'Frugt & Grønt',
//             organic: true,
//             cold: false,
//             unit: 'kg',
//             unitSize: 1,
//             bulkUnit: 'Kasse',
//             bulkSize: 10,
//             price: 8.75,
//             quantity: 100,
//             descriptions: [{
//                 productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//                 goodBecause: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//             }],
//         },
//         {
//             id: 'ckesaa4b9000101md3iam519p',
//             producer: 'Producent A',
//             title: 'Kartofler',
//             type: 'Nye kartofler',
//             image: 'https://raahandel.dk/wp-content/uploads/2019/11/IMG_20191112_112733.jpg',
//             category: 'Frugt & Grønt',
//             organic: true,
//             cold: false,
//             unit: 'kg',
//             unitSize: 1,
//             bulkUnit: 'Kasse',
//             bulkSize: 10,
//             price: 12.00,
//             quantity: 80,
//             descriptions: [{
//                 productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//                 goodBecause: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//             }],
//         },
//         {
//             id: 'ckesabws2000301md715i06wb',
//             producer: 'Producent B',
//             title: 'Pilsner',
//             type: 'Håndbrygget',
//             image: 'https://raahandel.dk/wp-content/uploads/2020/06/JPEG-Churchill.jpg',
//             category: 'Drikkevarer',
//             organic: true,
//             cold: false,
//             unit: 'l',
//             unitSize: 0.8,
//             bulkUnit: 'Kasse',
//             bulkSize: 12,
//             price: 11.50,
//             quantity: 75,
//             descriptions: [{
//                 productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//                 goodBecause: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//             }],
//         },
//         {
//             id: 'ckesaecrw000501md87nl9ax3',
//             producer: 'Producent C',
//             title: 'Æg',
//             type: 'Fritgående høns',
//             image: 'https://raahandel.dk/wp-content/uploads/2019/05/Billede-til-Ra%CC%8Ahandel.jpg',
//             category: 'Æg & Mejeri',
//             organic: true,
//             cold: true,
//             unit: 'stk',
//             unitSize: 12,
//             bulkUnit: 'Kasse',
//             bulkSize: 1,
//             price: 16.00,
//             quantity: 500,
//             descriptions: [{
//                 productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//                 goodBecause: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//             }],
//         },
//         {
//             id: 'ckesaisd0000701mda1t28it7',
//             producer: 'Producent D',
//             title: 'Frankfurter',
//             type: null,
//             image: 'https://raahandel.dk/wp-content/uploads/2019/10/frankfurter.jpg',
//             category: 'Kød',
//             organic: false,
//             cold: true,
//             unit: 'g',
//             unitSize: 400,
//             bulkUnit: 'Kasse',
//             bulkSize: 14,
//             price: 20.00,
//             quantity: 35,
//             descriptions: [{
//                 productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//                 goodBecause: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//             }],
//         }  
//     ]
// };