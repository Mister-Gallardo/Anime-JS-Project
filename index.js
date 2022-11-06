const wrapper = document.getElementById("tiles-container")


let toggled = false


const toggle = () => {
    toggled = !toggled;

    document.body.classList.toggle("toggled");
}

const handleOnClick = (index) => {
    toggle()

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            from: index,
            grid: [columns, rows]
        })
    })
}

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.onclick = e => handleOnClick(index)

    tile.style.opacity = toggled ? 0 : 1;

    return tile;
}


const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
}

const createGrid = () => {
    wrapper.innerHTML = ""

    columns = Math.floor(document.body.clientWidth / 57)
    rows = Math.floor(document.body.clientHeight / 57)

    wrapper.style.setProperty("--columns", columns)
    wrapper.style.setProperty("--rows", rows)

    createTiles(columns * rows)
}
createGrid();

window.onresize = () => createGrid()