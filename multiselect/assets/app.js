function alpineData() {
    return {
        makes: [...new Set(carsData.map(car => car.make))].sort(),
        models: [...new Set(carsData.map(car => car.model))].sort(),
        colors: [...new Set(carsData.map(car => car.color))].sort(),
        selectedMakes: [],
        selectedModels: [],
        selectedColors: [],

        shouldShowCar(car) {
            return this.selectedMakes.includes(car.make) ||
                this.selectedModels.includes(car.model) ||
                this.selectedColors.includes(car.color);
        }
    }
}

window.alpineData = alpineData;

