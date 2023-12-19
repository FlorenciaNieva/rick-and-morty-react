import React from 'react'

export default function Header() {
  return (
    <>
      <header style={{ backgroundImage: "url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?tf=3840x)", height:"350px", width: "100vw", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 style={{ fontFamily: "shlop", fontSize:"500%", color: "green", textAlign: "center", textShadow: "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white" }}>Rick and Morty</h1>
      </header>
    </>
  )
}
