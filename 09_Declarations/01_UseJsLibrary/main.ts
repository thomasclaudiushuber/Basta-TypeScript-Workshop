interface Friend {
    firstName: string;
}
declare function printFirstName(friend: Friend): void;

let friend = { firstName: "Thomas" };
printFirstName(friend);