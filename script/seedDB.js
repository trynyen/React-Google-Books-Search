const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        authors: "Suzanne Collins",
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },
    {
        authors: "Nhat Anh Nguyen",
        description: "The story of a man looking back on his life, Give Me a Ticket to Childhood captures the texture of childhood in all of its richness. As we learn of the small miracles and tragedies that made up the narrator's life?the misadventures and the misdeeds?we meet his long-lost friends, none of whom can forget how rich their lives once were. And even if Nguyen Nhat Anh can't take us back to our own childhoods, he captures those innocent times with a great deftness.",
        image: "https://books.google.com/books/content?id=sLajoAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE713X0270lnh-Uir-A3ModJ_ZhFmk66Gc0aOHV04nq-WBfrzEr2jKLxc7mbWYJOosg3QpgS9PNVTKsRt7Jhwe3dGjlYmnuHiKk3-Wowd68vKqb8IHoUrYSZKMT5_nHDRRxF2rvH4",
        link: "https://books.google.com/books?id=sLajoAEACAAJ&dq=title%3Aticket%20to%20childhood%20nguyen%20nhat%20anh&source=gbs_book_other_versions",
        title: "Ticket to Childhood"
    },
    {
        authors: "Du Nguyen",
        description: "In 3,254 verses, written in luc bat (six-eight) meter, the poem recounts the life, trials and tribulations of Thuy Kieu, a beautiful and talented young woman, who has to sacrifice herself to save her family. To save her father and younger brother from prison, she sells herself into marriage with a middle-aged man, not knowing that he is a pimp, and is forced into prostitution.",
        image: "https://books.google.com/books/content?id=95isiQ3ZhN4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73_NoRU243yyaWvk7j21l2YYv3vL5MC8D_CQsbCEEmOc73A3WgouIOUB_dDyZUom6W80KfEqliFLLPI8-TIazV78jHadQE4OPBfmjVngYpfM7St3KBrqAxseq5wRio3ac44USGQ",
        link: "https://books.google.com/books/about/The_Tale_of_Ki%C3%A8%CC%82u.html?id=95isiQ3ZhN4C",
        title: "The Tale of Kieu"
    },
    {
        authors: "J.K. Rowling",
        description: "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
        image: "https://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71NYEo6H7REax9lUK4uKFFXg82cHYHzD-rVHBDhp2i7f1KR7NKL87UOdld1n2dfnH_u5wvJsqM9107hJ_FaFV2GPioSlAEPk2UY4voPb3UUSFCkv23heIwKlxH8fAwx2u4EtsQk",
        link: "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?id=f280CwAAQBAJ",
        title: "Harry Potter: The Complete Collection (1-7)"
    },
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
