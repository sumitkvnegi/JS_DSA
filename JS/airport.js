let airports = ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"];

let routes = [
    ["DSM", "ORD"],
    ["ORD", "BGI"],
    ["BGI", "LGA"],
    ["SIN", "CDG"],
    ["CDG", "SIN"],
    ["CDG", "BUD"],
    ["DEL", "DOH"],
    ["DEL", "CDG"],
    ["TLV", "DEL"],
    ["EWR", "HND"],
    ["HND", "ICN"],
    ["HND", "JFK"],
    ["ICN", "JFK"],
    ["JFK", "LGA"],
    ["EYW", "LHR"],
    ["LHR", "SFO"],
    ["SFO", "SAN"],
    ["SFO", "DSM"],
    ["SAN", "EYW"]];

let startingAirport = "LGA";

let checkRoutes = {}, l = routes.length, potentialRoutes = {}, result = new Set();

for (let i = 0; i < l; i++) {
    if (checkRoutes[routes[i][0]]) {
        checkRoutes[routes[i][0]].push(routes[i][1]);
    } else {
        checkRoutes[routes[i][0]] = [routes[i][1]];
    }
}
console.log(checkRoutes);

for (const key in checkRoutes) {
    if (checkRoutes[key].length > 1) {
        potentialRoutes[key] = checkRoutes[key];
    }
}
console.log(potentialRoutes);

for (const k in potentialRoutes) {
    for (const key in checkRoutes) {
        if (potentialRoutes[k][0] in checkRoutes && potentialRoutes[k][1] in checkRoutes) {
            result.add(k);
        } else if (potentialRoutes[k][0] in potentialRoutes || potentialRoutes[k][1] in potentialRoutes) {
            result.add(k);
        }
    }
}

console.log(result);