// Problem 1
function seerToMon(seer) {
    // For Checking Wrong Input
    if (seer < 0 || typeof seer != "number") {
        return "Wrong Input";
    };

    const mon = seer / 40;
    return mon;
};

// Problem 2
function totalSales(shirt, pant, shoe) {
    // For Checking Wrong Input
    if (shirt < 0 || pant < 0 || shoe < 0 || typeof shirt != "number" || typeof pant != "number" || typeof shoe != "number") {
        return "Wrong Input"
    };

    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const totalShirtSale = shirt * shirtPrice;
    const totalPantSale = pant * pantPrice;
    const totalShoeSale = shoe * shoePrice;

    const salesTotal = totalShirtSale + totalPantSale + totalShoeSale;
    return salesTotal;
};

// Problem 3
function deliveryCost(item) {
    // For Checking Wrong Input
    if (item < 0 || typeof item != "number") {
        return "Wrong Input";
    }

    else if (item <= 100) {
        const totalCost = item * 100;
        return totalCost;
    }

    else if (item > 100 && item <= 200) {
        const after100Cost = (item - 100) * 80;
        const totalCost = 10000 + after100Cost;
        return totalCost;
    }

    else {
        const after200Cost = (item - 200) * 50;
        const totalCost = 18000 + after200Cost;
        return totalCost
    };
};

// Problem 4
function perfectFriend(friendsArray) {
    // For Checking Wrong Input
    if (typeof friendsArray != "object") {
        return "Wrong Input";
    }

    for (friend of friendsArray) {
        if (friend.length == 5) {
            return friend;
        };
    };
};
