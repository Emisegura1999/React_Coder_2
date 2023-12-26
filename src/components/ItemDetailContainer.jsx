import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const {id} = useParams()
    console.log(id)



    const productos = [
        {id: 1, titulo: "Notebook Asus", descripcion: "Notebook Asus Intel I5 1135g7 8gb 256gb Ssd 15.6 Full Hd Windows 11 Home", precio: 786.199, categoria: "Notebooks" },
        {id: 2, titulo: "Monitor Samsung", descripcion: "Monitor Samsung Gamer Curvo 24 Rg50 144hz Amd Freesync Color Negro", precio: 267.268, categoria: "Monitores" },
        {id: 3, titulo: "Mouse Logitech", descripcion: "Mouse gamer de juego Logitech G Series Lightsync G203 negro", precio: 47.799, categoria: "Perifericos" },
        {id: 4, titulo: "Notebook Lenovo", descripcion: "Notebook Lenovo IdeaPad 3i Intel I5 1135g7 Ram 8gb Ssd 256gb Full hd Windows 11", precio: 863.124, categoria: "Notebooks" },
        {id: 5, titulo: "Auriculares Razer", descripcion: "Auriculares gamer Razer Kraken classic black", precio: 104.544, categoria: "Perifericos" },
        {id: 6, titulo: "Monitor Philips", descripcion: "Monitor Philips 221v8/77 21,5'' Full Hd 75 Hz Lcd 4 Ms Color Negro", precio: 117.725, categoria: "Monitores" },
        {id: 7, titulo: "Notebook Acer", descripcion: "Notebook I3 Acer Aspire Intel Core 256gb Ssd 8gb Ram Color Negro", precio: 799.999, categoria: "Notebooks" },
        {id: 8, titulo: "Mouse Razer", descripcion: "Mouse gamer de juego inalámbrico recargable Razer Viper Ultimate with charging dock mercury", precio: 142.214, categoria: "Perifericos" },
        {id: 9, titulo: "Monitor Asus", descripcion: "Monitor Asus Va24ehe 23.8 Hdmi 1920x1080 Color Negro", precio: 199.998, categoria: "Monitores" },
        {id: 10, titulo: "Notebook Samsung", descripcion: "Samsung Galaxy Book3 15.6 I5 8gb 512gb Color Silver", precio: 999.999 , categoria: "Notebooks" },
      ]

    const mostrarProductos = new Promise ((resolve, reject) => {

        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        } else {
            reject("No se obtuvieron items")
        }
    })

    mostrarProductos
       .then((resultado) => {
        console.log(resultado)
       })
       .catch((error) => {
        console.log(error)
       })

     const productoFiltrado = productos.find((producto) => producto.id == id)
     

    return (
        <div>
            {
                        <ItemDetail
                            producto={productoFiltrado}

                        />    
            }
        </div>
    )   
}

export default ItemDetailContainer