

class DateService {

    getDatesForAlerts(itineraries) {
        
        const todaysDate = new Date();
        const todaysMonth = todaysDate.getMonth();
        console.log(itineraries[0]);
        let searchParks = []
        for(let i = 0; i < itineraries.length; i++) {
            const testDate = new Date(itineraries[i].startDate);
            const testMonth = testDate.getMonth();
            console.log (testMonth - todaysMonth)
            if((testMonth - todaysMonth) <= 1) {
                searchParks.push(itineraries[i].parkCode)
            
            }
        }
        return searchParks;
        
    }
}
export default new DateService()