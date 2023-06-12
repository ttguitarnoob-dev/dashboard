

export default function Hazel() {
    var currentHour = new Date().getHours()
   
    var prodigy = ""

    if (currentHour < 10) {
        prodigy = "/no-game"
    } else {
        prodigy = "https://sso.prodigygame.com/game/login?rid=daa00d0b-85de-4ec2-ae43-031f7232101d"
    }

    console.log('progeny', currentHour)
    return <div className="hazel-page">
        <div className="main-buttons">
            <ul>
                <li><a href="/wiki"><button>Research Things!</button></a></li>
                <li><a href="/poke"><button>Pokedex!</button></a></li>
                <li><a href="/youtube"><button>Videos!</button></a></li>
                <li><a href={prodigy}><button>Prodigy!</button></a></li>
            </ul>
        </div>
    </div>
}