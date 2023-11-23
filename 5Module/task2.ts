type ApiResponse<T> = {
    data: T,
    meta: MetaTrackMessage
}

type UserResponse = {
    id: number,
    name: string,
    registrationDate: string,
}


type AuthResponse = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    user_token: string;
}


type SomeOtherResponse = {
    field1: string;
    field2: string;
    field3: string;
}



type MetaTrackMessage = {
    trackId: string, // айди трекера логирования
    trackerUrl: string, // юрл трекера логирования
}


type LoadMetaMessage = {
    currentNodeId: string, // текущий сервер, с которым установлено соединение
    currentNodeLoad: number // 0-100, текущая загрузка ноды
}

type UserResponseAfterApiRefactoring = ApiResponse<UserResponse[]>;
type AuthResponseAfterApiRefactoring = ApiResponse<AuthResponse>;
type SomeOtherResponseAfterApiRefactoring = ApiResponse<SomeOtherResponse[]>;

class ApiProvider {
    static getUsers(): UserResponseAfterApiRefactoring[] {
        return SomeExternalApi.getUsers();
    }

    static auth(): AuthResponseAfterApiRefactoring {
        return SomeExternalApi.auth();
    }

    static getSomeOther(): SomeOtherResponseAfterApiRefactoring[] {
        return SomeExternalApi.getSomeOther();
    }
}


class SomeExternalApi {
    public static getUsers(): UserResponseAfterApiRefactoring[] {
        return [
            {
                data: [
                    {
                        "id": 49,
                        "name": "Kate",
                        "registrationDate": "2020-08-30 14:17:23"
                    }
                ],
                meta: {
                    trackId: "Sqny0mSDCByG",
                    trackerUrl: "someTrackerUrl",
                }
            },
            {
                data: [
                    {
                        "id": 50,
                        "name": "Alex",
                        "registrationDate": "2020-05-32 11:12:34"
                    }
                ],
                meta: {
                    trackId: "Sqdq1mWBQBmH",
                    trackerUrl: "someTrackerUrl",
                }
            },
            {
                data: [
                    {
                        "id": 51,
                        "name": "John",
                        "registrationDate": "2020-05-32 11:12:34"
                    }
                ],
                meta: {
                    trackId: "Sqdq1mWBQBmH",
                    trackerUrl: "someTrackerUrl",
                }
            },
        ]
    }


    public static auth(): AuthResponseAfterApiRefactoring {
        return {
            data: {
                id: 124,
                avatar: "<http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png>",
                name: "Johanna",
                login: "Johanna206",
                user_token: "eYEuVgUlDvRXgHR"
            },
            meta: {
                trackId: "Sqny0mSDCByG",
                trackerUrl: "someTrackerUrl",
            }
        }
    }


    public static getSomeOther(): SomeOtherResponseAfterApiRefactoring[] {
        return [
            {
                data: [
                    {
                        "field1": "7pfE0oQFUZJg",
                        "field2": "rS9bzwuy8qb1U",
                        "field3": "2vLYGgE"
                    },
                ],
                meta: {
                    trackId: "Sqny0mSDCByG",
                    trackerUrl: "someTrackerUrl",
                }
            },
            {
                data: [
                    {
                        "field1": "vS",
                        "field2": "Dl",
                        "field3": "6JB28Del"
                    },
                ],
                meta: {
                    trackId: "Sqny0mSDCByG",
                    trackerUrl: "someTrackerUrl",
                }
            },
            {
                data: [
                    {
                        "field1": "YDefs7phiN",
                        "field2": "YDm4VYDfk2IrTgv",
                        "field3": "OS9Pt8P7"
                    },
                ],
                meta: {
                    trackId: "Sqny0mSDCByG",
                    trackerUrl: "someTrackerUrl",
                }
            },
        ]
    }
}

console.log(ApiProvider.getUsers());
console.log(ApiProvider.auth());
console.log(ApiProvider.getSomeOther());



