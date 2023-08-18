
 export function SearchDestination(Destination, searchQuery){
    searchQuery = searchQuery.toString().toLowerCase();

    const filteredList = Destination.filter(dest => dest.name.toLowerCase().startsWith(searchQuery))

    return filteredList;
}