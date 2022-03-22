function areEqual2d(arr1: string[][], arr2: string[][]): boolean {
    let tempArr1: string[] = [];
    let tempArr2: string[] = [];

    arr1.forEach((stringArr) => {
        stringArr.forEach((value) => tempArr1.push(value));
    });

    arr2.forEach((stringArr) => {
        stringArr.forEach((value) => tempArr2.push(value));
    });

    console.dir(tempArr1);
    console.dir(tempArr2);

    return true;
}

areEqual2d(
    [[], ['2'], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], ['2'], [], [], [], [], [], [], [], [], [], []]
);
