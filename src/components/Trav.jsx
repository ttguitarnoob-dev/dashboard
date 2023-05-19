import React, {useEffect, useState} from "react"




export default function Trav() {



//fetch pihole data
const url = 'http://10.24.24.112/admin/api.php?summary&auth=ca070dc73175206fd289ecf8e992614289b7db7a046f1f71c709c77f704008e3'
const [pihole, setPihole] = useState([])


async function fetchPihole(myurl) {
    console.log('url', myurl)
    const response = await fetch(myurl, {mode: "no-cors"})
    console.log('response', response)
    const data = await response.json()
    console.log('data', data)
    setPihole(data)
}

useEffect(() => {
    fetchPihole(url)
}, [])

console.log('pismell', pihole)


//render

    return <div className="trav-page">
    
    
    <div className="main-buttons">
        <ul className="trav-buttons">
            <li>
                <a href="https://proxmox.ttguitarnoob.cloud"><div className="dash-items">
                    <h2>Proxmox</h2>
                </div></a>
            </li>
            <li>
                <a href="https://proxmox.ttguitarnoob.cloud"><div className="dash-items">
                    <h2>Proxmox</h2>
                </div></a>
            </li>
            
        </ul>
    </div>
</div>

}