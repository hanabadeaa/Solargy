const positions = [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 1, y: 1, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: -1, y: 1, z: 0 },
    { x: 1, y: -1, z: 0 },
    { x: 0, y: -1, z: 0 },
    { x: -1, y: -1, z: 0 }
];

let positionIndex = 0;

function moveModel() {
    console.log("Moving model");
    const entity = document.querySelector('#model');
    if (entity) {
        const position = positions[positionIndex];
        const { x, y, z } = position;

        console.log(`Setting position to X:${x}, Y:${y}, Z:${z}`); // Check if positions are correct
        // Set the position of the GLTF model
        entity.object3D.position.set(x, y, z);

        positionIndex = (positionIndex + 1) % positions.length;
    }
}

setInterval(() => {
    moveModel();
}, 1000);
