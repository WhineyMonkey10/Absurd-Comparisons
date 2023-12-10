function absurdConversion(valueNumber, unit) {
    unit = unit.toLowerCase();

    let weightsInKilograms = {
        "AfricanElephant": 6000,
        "Mice": 0.02,
        "BlueWhale": 190000,
        "Human": 70,
        "HouseCat": 4,
        "Horse": 600,
        "Lion": 190,
        "HouseFly": 0.000012,
        "Ant": 0.000005,
        "LadyBug": 0.000007,
        "Car": 1500,
        "Bicycle": 0.014,
        "GrandPiano": 500,
        "Violin": 0.4,
        "SoccerBall": 0.43,
        "TRex": 8000,
        "Mosquito": 0.0000025,
        "RiceGrain": 0.00003,
        "GoldBar": 12.4,
        "Basketball": 0.625,
        "BowlingBall": 6.8,
        "GrainOfSand": 0.000011,
        "Feather": 0.0002,
        "Apple": 0.1,
        "ElephantTusk": 45,
        "BlueJayBird": 0.085,
        "PostageStamp": 0.0001,
        "Coin": 0.0081,
        "Watermelon": 9,
        "BasketballHoop": 18,
        "Guitar": 1.6,
        "Brick": 3.5,
        "ElephantSeal": 3000,
        "EmperorPenguin": 30,
        "Chopsticks": 0.01,
        "Tesla": 2200
    };

    let weightsInGrams = {
        "Sparrow": 30, 
        "PaperClip": 1, 
        "CD": 15, 
        "GolfBall": 45, 
        "ChickenEgg": 50, 
        "Hummingbird": 5, 
        "ButterStick": 113, 
        "Baseball": 145, 
        "Hamster": 30, 
        "Pencil": 7 
    };

    let weightsInTonnes = {
        "SUV": 2.5, 
        "HumpbackWhale": 30, 
        "Boeing747": 180, 
        "Cottage": 50, 
        "BlueMarlin": 1, 
        "SchoolBus": 5, 
        "Boulder": 2, 
        "WindTurbine": 200, 
        "TrainCar": 30, 
        "DinosaurSkeleton": 0.5 
    };

    let volumeInMilliliters = {
        "Teaspoon": 5, 
        "Lemon": 45, 
        "PerfumeBottle": 50, 
        "ShotGlass": 44, 
        "CanOfSoda": 355, 
        "CarOilFilter": 250, 
        "LightBulb": 300, 
        "WineBottle": 750 
    };

    let volumeInLiters = {
        "Backpack": 20, 
        "Refrigerator": 500, 
        "Bathtub": 150, 
        "FishTank": 75, 
        "Kettle": 1.7, 
        "TrashCan": 50, 
        "CarFuelTank": 60, 
        "WateringCan": 10, 
        "SwimmingPool": 75000, 
        "HotTub": 1600 
    };

    let lengthsInMeters = {
        "BaseballBat": 1, 
        "GreatWhiteShark": 5, 
        "BowlingLane": 18, 
        "BlueWhale": 30, 
        "SemiTrailer": 14, 
        "Python": 6, 
        "Giraffe": 5.5, 
        "GolfClub": 1.2, 
        "Bus": 12, 
        "Ostrich": 2.7 
    };

    let distancesInKilometers = {
        "Marathon": 42.195, 
        "WidthOfManhattan": 3.7, 
        "DepthOfMarianaTrench": 11, 
        "LengthOfGreatWallOfChina": 21196, 
        "DiameterOfMoon": 3474.8, 
        "HeightOfMountEverest": 0.008848, 
        "GrandCanyon": 446, 
        "AmazonRiver": 6575, 
        "Route66": 3940, 
        "DistanceToSpace": 0.1 
    };

    let lengthsInCentimeters = {
        "CreditCard": 8.56, 
        "Smartphone": 16, 
        "DiningTable": 200, 
        "Book": 23, 
        "PianoKey": 12, 
        "DoorHandle": 10, 
        "Shoe": 30, 
        "Ruler": 30, 
        "Laptop": 38, 
        "MousePad": 25 
    };

    let lengthsInMillimeters = {
        "GrainOfRice": 8, 
        "ComputerChip": 14, 
        "SewingNeedle": 40, 
        "Key": 50, 
        "GuitarPick": 30, 
        "MicroSDCard": 15, 
        "Staple": 6, 
        "PaperThickness": 0.1, 
        "USBConnector": 16, 
        "Nail": 50 
    };

    let weightsInMilligrams = {
        "GrainOfSalt": 58, 
        "WaterDrop": 50, 
        "Eyelash": 1, 
        "PollenGrain": 0.6, 
        "DustMite": 200, 
        "HumanHair": 50, 
        "CottonFiber": 2, 
        "Microchip": 1, 
        "PrinterInkDot": 0.1, 
        "VitaminPill": 500 
    };

    let allConversions = {
        "kg": {
            "African Elephant": weightsInKilograms["AfricanElephant"],
            "Mice": weightsInKilograms["Mice"],
            "Blue Whale": weightsInKilograms["BlueWhale"],
            "Human": weightsInKilograms["Human"],
            "House Cat": weightsInKilograms["HouseCat"],
            "Horse": weightsInKilograms["Horse"],
            "Lion": weightsInKilograms["Lion"],
            "House Fly": weightsInKilograms["HouseFly"],
            "Ant": weightsInKilograms["Ant"],
            "Lady Bug": weightsInKilograms["LadyBug"],
            "Car": weightsInKilograms["Car"],
            "Bicycle": weightsInKilograms["Bicycle"],
            "Grand Piano": weightsInKilograms["GrandPiano"],
            "Violin": weightsInKilograms["Violin"],
            "Soccer Ball": weightsInKilograms["SoccerBall"],
            "T-Rex": weightsInKilograms["TRex"],
            "Mosquito": weightsInKilograms["Mosquito"],
            "Rice Grain": weightsInKilograms["RiceGrain"],
            "Gold Bar": weightsInKilograms["GoldBar"],
            "Basketball": weightsInKilograms["Basketball"],
            "Bowling Ball": weightsInKilograms["BowlingBall"],
            "Grain Of Sand": weightsInKilograms["GrainOfSand"],
            "Feather": weightsInKilograms["Feather"],
            "Apple": weightsInKilograms["Apple"],
            "Elephant Tusk": weightsInKilograms["ElephantTusk"],
            "Blue Jay Bird": weightsInKilograms["BlueJayBird"],
            "Postage Stamp": weightsInKilograms["PostageStamp"],
            "Coin": weightsInKilograms["Coin"],
            "Watermelon": weightsInKilograms["Watermelon"],
            "Basketball Hoop": weightsInKilograms["BasketballHoop"],
            "Guitar": weightsInKilograms["Guitar"],
            "Brick": weightsInKilograms["Brick"],
            "Elephant Seal": weightsInKilograms["ElephantSeal"],
            "Emperor Penguin": weightsInKilograms["EmperorPenguin"],
            "Chopsticks": weightsInKilograms["Chopsticks"],
            "Tesla": weightsInKilograms["Tesla"]
        },

        "g": {
            "Sparrow": weightsInGrams["Sparrow"],
            "Paper Clip": weightsInGrams["PaperClip"],
            "CD": weightsInGrams["CD"],
            "Golf Ball": weightsInGrams["GolfBall"],
            "Chicken Egg": weightsInGrams["ChickenEgg"],
            "Hummingbird": weightsInGrams["Hummingbird"],
            "Butter Stick": weightsInGrams["ButterStick"],
            "Baseball": weightsInGrams["Baseball"],
            "Hamster": weightsInGrams["Hamster"],
            "Pencil": weightsInGrams["Pencil"]
        },

        "t": {
            "SUV": weightsInTonnes["SUV"],
            "Humpback Whale": weightsInTonnes["HumpbackWhale"],
            "Boeing 747": weightsInTonnes["Boeing747"],
            "Cottage": weightsInTonnes["Cottage"],
            "Blue Marlin": weightsInTonnes["BlueMarlin"],
            "School Bus": weightsInTonnes["SchoolBus"],
            "Boulder": weightsInTonnes["Boulder"],
            "Wind Turbine": weightsInTonnes["WindTurbine"],
            "Train Car": weightsInTonnes["TrainCar"],
            "Dinosaur Skeleton": weightsInTonnes["DinosaurSkeleton"]
        },

        "ml": {
            "Teaspoon": volumeInMilliliters["Teaspoon"],
            "Lemon": volumeInMilliliters["Lemon"],
            "Perfume Bottle": volumeInMilliliters["PerfumeBottle"],
            "Syringe": volumeInMilliliters["Syringe"],
            "Shot Glass": volumeInMilliliters["ShotGlass"],
            "Can Of Soda": volumeInMilliliters["CanOfSoda"],
            "Car Oil Filter": volumeInMilliliters["CarOilFilter"],
            "Basketball": volumeInMilliliters["Basketball"],
            "Light Bulb": volumeInMilliliters["LightBulb"],
            "Wine Bottle": volumeInMilliliters["WineBottle"]
        },

        "l": {
            "Backpack": volumeInLiters["Backpack"],
            "Refrigerator": volumeInLiters["Refrigerator"],
            "Bathtub": volumeInLiters["Bathtub"],
            "Fish Tank": volumeInLiters["FishTank"],
            "Kettle": volumeInLiters["Kettle"],
            "Trash Can": volumeInLiters["TrashCan"],
            "Car Fuel Tank": volumeInLiters["CarFuelTank"],
            "Watering Can": volumeInLiters["WateringCan"],
            "Swimming Pool": volumeInLiters["SwimmingPool"],
            "Hot Tub": volumeInLiters["HotTub"]
        },

        "m": {
            "Baseball Bat": lengthsInMeters["BaseballBat"],
            "Great White Shark": lengthsInMeters["GreatWhiteShark"],
            "Bowling Lane": lengthsInMeters["BowlingLane"],
            "Blue Whale": lengthsInMeters["BlueWhale"],
            "Semi Trailer": lengthsInMeters["SemiTrailer"],
            "Python": lengthsInMeters["Python"],
            "Giraffe": lengthsInMeters["Giraffe"],
            "Golf Club": lengthsInMeters["GolfClub"],
            "Bus": lengthsInMeters["Bus"],
            "Ostrich": lengthsInMeters["Ostrich"]
        },

        "km": {
            "Marathon": distancesInKilometers["Marathon"],
            "Width Of Manhattan": distancesInKilometers["WidthOfManhattan"],
            "Depth Of Mariana Trench": distancesInKilometers["DepthOfMarianaTrench"],
            "Length Of Great Wall Of China": distancesInKilometers["LengthOfGreatWallOfChina"],
            "Diameter Of Moon": distancesInKilometers["DiameterOfMoon"],
            "Height Of Mount Everest": distancesInKilometers["HeightOfMountEverest"],
            "Grand Canyon": distancesInKilometers["GrandCanyon"],
            "Amazon River": distancesInKilometers["AmazonRiver"],
            "Route 66": distancesInKilometers["Route66"],
            "Distance To Space": distancesInKilometers["DistanceToSpace"]
        },

        "cm": {
            "Credit Card": lengthsInCentimeters["CreditCard"],
            "Smartphone": lengthsInCentimeters["Smartphone"],
            "Dining Table": lengthsInCentimeters["DiningTable"],
            "Book": lengthsInCentimeters["Book"],
            "Piano Key": lengthsInCentimeters["PianoKey"],
            "Door Handle": lengthsInCentimeters["DoorHandle"],
            "Shoe": lengthsInCentimeters["Shoe"],
            "Ruler": lengthsInCentimeters["Ruler"],
            "Laptop": lengthsInCentimeters["Laptop"],
            "Mouse Pad": lengthsInCentimeters["MousePad"]
        },

        "mm": {
            "Grain Of Rice": lengthsInMillimeters["GrainOfRice"],
            "Computer Chip": lengthsInMillimeters["ComputerChip"],
            "Sewing Needle": lengthsInMillimeters["SewingNeedle"],
            "Key": lengthsInMillimeters["Key"],
            "Guitar Pick": lengthsInMillimeters["GuitarPick"],
            "Micro SD Card": lengthsInMillimeters["MicroSDCard"],
            "Staple": lengthsInMillimeters["Staple"],
            "Paper Thickness": lengthsInMillimeters["PaperThickness"],
            "USB Connector": lengthsInMillimeters["USBConnector"],
            "Nail": lengthsInMillimeters["Nail"]
        },

        "mg": {
            "Grain Of Salt": weightsInMilligrams["GrainOfSalt"],
            "Water Drop": weightsInMilligrams["WaterDrop"],
            "Eyelash": weightsInMilligrams["Eyelash"],
            "Pollen Grain": weightsInMilligrams["PollenGrain"],
            "Dust Mite": weightsInMilligrams["DustMite"],
            "Human Hair": weightsInMilligrams["HumanHair"],
            "Cotton Fiber": weightsInMilligrams["CottonFiber"],
            "Microchip": weightsInMilligrams["Microchip"],
            "Printer Ink Dot": weightsInMilligrams["PrinterInkDot"],
            "Vitamin Pill": weightsInMilligrams["VitaminPill"]

        }

    };

    function randomConversion() {
        let conversions = allConversions[unit];
        let conversionKeys = Object.keys(conversions);
        let randomKey = conversionKeys[Math.floor(Math.random() * conversionKeys.length)];
        let randomValue = conversions[randomKey];
        return [randomKey, randomValue];
    }

    function absurdConversionSentence() {
        let [randomKey, randomValue] = randomConversion();
        let numberOfObjects = valueNumber / randomValue;
        return numberOfObjects.toFixed(2) + " " + randomKey + "(s)";
    }

    return absurdConversionSentence();
}

document.addEventListener('DOMContentLoaded', function () {
    var valueInput = document.getElementById('valueInput');
    var unitSelect = document.getElementById('unitSelect');
    var invisibleLabel = document.getElementById('invisibleLabel');

    function updateLabel() {
        if (valueInput.value !== "" && unitSelect.value !== "") {
            invisibleLabel.style.visibility = 'visible';
            invisibleLabel.textContent = absurdConversion(parseFloat(valueInput.value), unitSelect.value);
        } else {
            invisibleLabel.style.visibility = 'hidden';
            invisibleLabel.textContent = '';
        }
    }

    valueInput.addEventListener('input', updateLabel);
    unitSelect.addEventListener('change', updateLabel);
});