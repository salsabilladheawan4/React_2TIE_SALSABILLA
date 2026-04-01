import React from 'react';

// 1. Komponen Pendukung (Definisikan di luar atau di atas agar rapi)
function GreetingBinjai() {
    return (
        <small>Salam dari Binjai</small>
    );
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    );
}

function UserCard(props) {
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    );
}


export default function HelloWorld() {
    const propsUserCard = {
        nama: "Salsabilla",
        nim: "2455301173",
        tanggal: "2006/02/04"
    };

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard 
                nama={propsUserCard.nama} 
                nim={propsUserCard.nim} 
                tanggal={propsUserCard.tanggal} 
            />
        </div>
    );
}