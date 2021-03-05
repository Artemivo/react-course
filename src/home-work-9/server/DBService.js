let arr = [];
class dbService {
  constructor(array) {
    this.array = array;
  }
  getUsers() {
    return this.array;
  }
  setUsers(usersArray) {
    if (usersArray.length === 0) {
    } else {
      this.array = this.array.concat(usersArray);
    }
  }
}


module.exports = new dbService(arr);
