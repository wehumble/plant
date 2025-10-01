const plant = {
    name: "Fiddle Leaf Fig",
    leaf: "large, glossy leaves",
    roots: "deep, extensive root system",
    habitat: "tropical rainforests",
    stem: "woody trunk"
};

console.log(plant.leaf);

plant["name"] = "rubber plant";
plant["polinator"] = ["bees", "birds"];
plant["valueCoordinator"] = [
    plant.name,
    plant.leaf,
    plant.roots,
    plant.habitat,
    plant.stem,
    plant.polinator
];


plant.describe = () => {
    return `The ${plant.name} has ${plant.leaf}, grows in ${plant.habitat}, and is pollinated by ${plant.polinator.join(" and ")}.`;
};

console.log(plant.describe());
console.log(plant);
