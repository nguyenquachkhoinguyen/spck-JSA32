let products = {
    data: [
        {
            id: 1,
            name: "Cây Quất",
            price: "220.000đ",
            image: "https://cuahangcaycanh.com/upload/images/cay-quat-the-huyen.jpg"
        },

        {
            id: 2,
            name: "Cây Đào",
            price: "340.000đ",
            image: "https://faster.vn/wp-content/uploads/2016/01/hoa-dao.jpg"
        },

        {
            id: 3,
            name: "Cây Hoa Mai Vàng",
            price: "490.000đ",
            image: "https://saigonhoa.com/wp-content/uploads/2015/01/chau-cay-hoa-mai-sanh-toa-nha.jpg"
        },

        {
            id: 4,
            name: "Cây Kim Tiền",
            price: "100.000đ",
            image: "https://cayvahoa.net/wp-content/uploads/2016/02/cay-kim-tien.jpg"
        },

        {
            id: 5,
            name: "Cây Đuôi Công",
            price: "115.000đ",
            image: "https://canhquanminhhan.com/thumbs/540x540x2/upload/product/14-duoi-cong-tim-la-tron-6042.png"
        },

        {
            id: 6,
            name: "Cây Vạn Lộc",
            price: "112.000đ",
            image: "https://chamconcept.vn/wp-content/uploads/2024/01/cay-van-loc-trong-nuoc-4.jpg"
        },

        {
            id: 7,
            name: "Cây Ngũ Gia Bì",
            price: "149.000đ",
            image: "https://static-images.vnncdn.net/files/publish/2022/12/15/cay-phong-thuy-1132.jpg"
        },

        {
            id: 8,
            name: "Cây Sống Đời",
            price: "99.000đ",
            image: "https://caycanhhaidang.com/wp-content/uploads/2016/06/hoa-song-doi-do-don.jpg"
        },

        {
            id: 9,
            name: "Cây Lan Ý",
            price: "119.000đ",
            image: "https://static-images.vnncdn.net/files/publish/2022/8/4/cach-trong-va-y-nghia-phong-thuy-it-nguoi-biet-cua-cay-lan-y-01b3d060089e4d20839cad5049cfb384.jpg"
        },

        {
            id: 10,
            name: "Cây Hồng Môn",
            price: "120.000đ",
            image: "https://caycanhhanoi.vn/wp-content/uploads/2015/09/cay-hong-mon-noi-that-dep-23-510x680.jpg"
        },

        {
            id: 11,
            name: "Cây Vạn Niên Thanh",
            price: "110.000đ",
            image: "https://xanhbonsai.com/wp-content/uploads/2021/10/cay-van-nien-thanh-1-800x958-1.jpg"
        },

        {
            id: 12,
            name: "Cây Đại Phú Gia",
            price: "130.000đ",
            image: "https://caycanhhanoi.vn/wp-content/uploads/2015/10/cay-dai-phu-gia-22.jpg"
        },

        {
            id: 13,
            name: "Hoa Hồng",
            price: "129.000đ",
            image: "https://phamnguyendecor.vn/wp-content/uploads/2022/09/Cay-Hoa-Moc-Lan-Gia-1m2-2.jpg"
        },

        {
            id: 14,
            name: "Cây Kim Ngân",
            price: "138.000đ",
            image: "https://caycanh3mien.com/wp-content/uploads/2021/07/cay-kim-ngan-ben-chau-bom-su-33cm-gia-700k-e1626930921363.jpg"
        },

        {
            id: 15,
            name: "Cây Phát Tài",
            price: "159.000đ",
            image: "https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-05/cay-phat-tai-co-rat-nhieu-chung-loai-651e357ac9649b0ef5f6f24c.webp"
        },

        {
            id: 16,
            name: "Cây Trầu Bà",
            price: "122.000đ",
            image: "https://chauxinh.vn/wp-content/uploads/2022/10/CC64-4.jpg"
        },

        {
            id: 17,
            name: "Cây Vạn Lộc Đỏ",
            price: "79.000đ",
            image: "https://caycanhanhthu.vn/wp-content/uploads/2023/09/cho-thue-cay-van-loc-1.jpg"
        },

        {
            id: 18,
            name: "Cây Hoa Mai Trắng",
            price: "199.000đ",
            image: "https://down-vn.img.susercontent.com/file/577e3f43b41c1b8e8bc1ab4772d9edf9"
        },

        {
            id: 19,
            name: "Hoa Cát Tường",
            price: "100.000đ",
            image: "https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-05/hoa-cat-tuong-co-su-da-dang-ve-mau-sac-nhu-hong-trang-tim-xanh-651e411ec9649b0ef5f80d40.webp"
        },

        {
            id: 20,
            name: "Hoa Đồng Tiền",
            price: "99.000đ",
            image: "https://khuonchaucanh.com.vn/upload/images/binh-hoa-dong-tien.jpg"
        },

        {
            id: 21,
            name: "Hoa Cẩm Chướng",
            price: "120.000đ",
            image: "https://hoahanoi.com.vn/wp-content/uploads/2020/08/Bo-hoa-cam-chuong-e1598546539415.jpg"
        },

        {
            id: 22,
            name: "Hoa Lan",
            price: "110.000đ",
            image: "https://plant.vn/wp-content/uploads/2022/02/l0.jpg"
        },

        {
            id: 23,
            name: "Hoa Thược Dược",
            price: "79.000đ",
            image: "https://langbiangfarm.com.vn/wp-content/uploads/2020/09/thuoc-duoc-chau-edit-600x800.jpg"
        },

        {
            id: 24,
            name: "Hoa Tulip",
            price: "56.000đ",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-gxyvcbpxotiv56"
        },

        {
            id: 25,
            name: "Hoa Oải Hương",
            price: "60.000đ",
            image: "https://bizweb.dktcdn.net/100/275/164/files/img-6807-web.jpg?v=1695307470663"
        },

        {
            id: 26,
            name: "Hoa Loa Kèn Trắng",
            price: "80.000đ",
            image: "https://dienhoaxanh.com/wp-content/uploads/2022/04/hoa-loa-ken-trang.jpg"
        },

        {
            id: 27,
            name: "Hoa Sen",
            price: "115.000đ",
            image: "https://khuonchaucanh.com.vn/upload/images/cach-trong-sen-trong-chau.png"
        },

        {
            id: 28,
            name: "Hoa Mẫu Đơn",
            price: "56.000đ",
            image: "https://hoaluanhatrong.com/wp-content/uploads/2022/11/binh-hoa-mau-don-bui-hong-nhe-nhang.jpg"
        },

        {
            id: 29,
            name: "Hoa Cẩm Tú Cầu",
            price: "56.000đ",
            image: "https://cayvahoa.net/wp-content/uploads/2016/08/cam-tu-cau-3.jpg"
        },

        {
            id: 30,
            name: "Hoa Huệ",
            price: "70.000đ",
            image: "https://hoavily.com/uploads/file/chau-hoa-hue-trang.jpg"
        },

        {
            id: 31,
            name: "Hoa Lan Phi",
            price: "89.000đ",
            image: "https://sieuthihatgiong.vn/wp-content/uploads/2023/02/C%E1%BB%A7%20gi%E1%BB%91ng%20hoa%20lan%20nam%20philannamphi0.jpg"
        },

        {
            id: 32,
            name: "Hoa Cúc",
            price: "60.000đ",
            image: "https://danviet.mediacdn.vn/thumb_w/480/upload/4-2019/images/2019-11-16/0-1573905653-width720height960.jpg"
        },
    ]
}

for (let items of products.data) {

    let card = document.createElement("div")  //tạo thẻ div//
    card.classList.add("card")   //thêm class tên là card//

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")   //class="image-container"//

    let image = document.createElement("img")
    image.setAttribute("src", items.image)  //them src cua the img//
    imgContainer.appendChild(image)     //goi dua con(render) ra //
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();      //viet hoa//
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onClick", "addToCart(" + items.id + ")")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

// key: cart
// value: {product; {id: 1, name:'s, gia ca: 11, quantity: 1}}
byGetProductById = (id) => {
    for (let items of products.data) {
        if (id == items.id) {
            return items;
        }
    }
}

var cart = []
addToCart = (id) => {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage)
    }
    let product = byGetProductById(id)
    let itemDetails = cart.find(items => items.product.id == id)
    if (itemDetails) {
        itemDetails.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))

}

function showAll() {
    var list = `<tr><th>Tên sản phẩm</th><th>Giá cả</th><th>Số lượng</th></tr>`
    JSON.parse(localStorage.getItem('cart')).forEach(element => {
        list += `<tr><td>` + element.product.name +
            `</td><td>` + element.product.price +
            `</td><td>` + element.quantity +
            `</td></tr>`;
    })
    document.getElementById('list').innerHTML = list;
}