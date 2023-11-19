type User = {
    readonly id: number;
    name: string;
    messagesCount: number;
    warnings: number;
    readonly registrationDate: Date;
}

const users: User[] = [
    {id: 0, name: 'John', messagesCount: 1521, warnings: 2, registrationDate: new Date('December 17, 2005 03:24:00')},
    {id: 1, name: 'Jane', messagesCount: 1445, warnings: 0, registrationDate: new Date('October 16, 2007 03:24:00')},
    {id: 2, name: 'Steve', messagesCount: 2212, warnings: 1231, registrationDate: new Date('July 20, 2019 03:24:00')},
    {id: 3, name: 'Mary', messagesCount: 5754, warnings: 544, registrationDate: new Date('January 22, 2010 03:24:00')},
    {id: 4, name: 'Kate', messagesCount: 12231, warnings: 151, registrationDate: new Date('August 7, 2014 03:24:00')},
    {id: 5, name: 'Alex', messagesCount: 40412, warnings: 222, registrationDate: new Date('March 1, 2017 03:24:00')},
    {id: 6, name: 'Jeff', messagesCount: 551233, warnings: 48009, registrationDate: new Date('May 4, 2020 03:24:00')},
];

class TrustedUser {
    constructor(readonly user: User) {}

    getConfidenceRatio(): number {
        return ConfidenceHelper.checkConfidenceRatio(this.user);
    }
}

class ConfidenceHelper {
    static checkConfidenceRatio(user: User): number {
        const daysAfterRegistration = Math.round((new Date().getTime() - user.registrationDate.getTime()) / (1000 * 3600 * 24));
        return (user.messagesCount * 2 - user.warnings * 100 + daysAfterRegistration)
    }
}

const untrustedUsers: User[] = users.filter((user: User): User | undefined => {
    const confidenceRatio: number = new TrustedUser(user).getConfidenceRatio();
    if (confidenceRatio < 0) {
        return user;
    }
});
// тут я сократил создание переменной, но мне кажется этот вариант похуже, тк менее читаем
const untrustedUsers2: User[] = users.filter((user: User): User | undefined => (new TrustedUser(user).getConfidenceRatio() < 0)? user : undefined);

