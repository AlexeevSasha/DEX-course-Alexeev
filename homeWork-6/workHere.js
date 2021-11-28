import { Vehicle, ElectricCar, ICECar } from "./types";

// ВАЖНО: ни в одной задаче нельзя использовать глобальные
// переменные. Проверяться будет только содержание уже
// существующих деклараций файла

// Необходимо описать класс "Привод", который будет принимать
// тип привода автомобиля ("FWD", "RWD", "AWD"). Предусмотреть
// метод canDrive(cover), который на основе полученного параметра
// будет определять может ли автомобиль передвигаться по поверхности:
// - "asphalt" доступен для всех;
// - "sand" доступен для полного привода ("AWD");
// - "rocks" не доступен для всех;
// - при получении иных вариантов параметра — выбрасывать ошибку
export class Drive {
  constructor(typeCar) {
    this.typeCar = typeCar;
    this.canDrive = this.canDrive.bind(this);
  }
  canDrive(cover) {
    switch (cover) {
      case "asphalt":
        return true;
      case "sand":
        return this.typeCar === "AWD";
      case "rocks":
        return false;
      default:
        throw new Error("not implemented");
    }
  }
}

// Необходимо описать класс "Зарядная станции" для зараядки
// электирческих автомобилей (chargeVehicle должен вызывать vehicle.charge()).
// Имейте в виду, что электромобили возгараются от перезарядки
// (>100%) или при слишком интенсивной зарадке (импульс заряда должен
export class Charger {
  charDates = {};

  chargeVehicle(vehicle) {
    if (vehicle instanceof ElectricCar) {
      const currentDate = Date.now();

      if (this.charDates[vehicle.id] === undefined) {
        this.charDates[vehicle.id] = Date.now();
      }

      if (
        vehicle.battery < 100 &&
        currentDate - this.charDates[vehicle.id] >= 500
      ) {
        vehicle.charge();
        this.charDates[vehicle.id] = currentDate;
      }
    } else {
      throw new Error("not implemented");
    }
  }
}
// Унаследуйте класс Vehicle. Необходимо создать класс таким образом,
// чтоб пробег всех автомобилей можно было получить без параметров.
// Реализуйте функцию получения суммарного пробега всех автомобилей
export class Car extends Vehicle {
  static totalMileage = 0;
  trip(mileage) {
    try {
      super.trip(mileage);
      Car.totalMileage += mileage;
    } catch {
      throw new Error("not implemented");
    }
  }
}
export function getTotalCarsMileage() {
  return Car.totalMileage;
}
