/* Проблема была в том, что в функции getHouse тип возвращаемого объекта приводился вручную через as
из-за чего тайпскрипт не ставил жестких требований к заполнению объекта и
при отсутсвии некоторых полей все равно позволял к ним обращаться, от чего все проблемы и были
я переписал код так, чтобы он не выдавал ошибок*/
type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};
function getHouse(): House {
    return {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();