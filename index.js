class BankBranch {                                //defining BankBranch as a class
    constructor(branchInfo) {                     //checks if the bankBranchInstance variable is null and if so it creates a new instance.
      if (!BankBranch.bankBranchInstance) {      //to check if the static property is false and if the instance of BankBranch exists
        BankBranch.bankBranchInstance = this;     //if the instance is false it will assign the current instance to the static property
        this.branchName = branchInfo.branchName; //to assign location property from the branchInfo
        this.location = branchInfo.location;       
        this.manager = branchInfo.manager;    //to assign the manager property  from the branchInfo
        this.customers = [];   //initializes the customers property of the current instance as an empty array
      }
      return BankBranch.bankBranchInstance;     //returns the singleton instance of the BankBranch class, whether its newly created or already existing
    }
  
    addCustomer(customer) {                //adds a customer to the branch
      this.customers.push(customer);         //adds the customer parameter to the customer arrays of the current BankBranch instance
    }
  
    removeCustomer(customer) {                  //removes customer from the branch
      const index = this.customers.indexOf(customer);
      if (index !== -1) {
        this.customers.splice(index, 1);
      }
    }
  
    getAllCustomers() {           //returns all customers of the branch
      return this.customers;
    }
  
    getBranchDetails() {            //returns details about the branch
      return `Branch: ${this.branchName}, Location: ${this.location}, Manager: ${this.manager}`;
    }
  
    updateBranchManager(newManager) {         //updates the branch manager
      this.manager = newManager;
    }
  
    getBranchLocation() {     //returns the branch location
      return this.location;
    }
  
    getNumberOfCustomers() { //returns the number of customers at the branch
      return this.customers.length;
    }
  
    hasCustomer(customer) { //checks if there are customers at the branch
      return this.customers.includes(customer);
    }
  
    getBranchInfo() {       //returns as an object containing branch information
      return {
        branchName: this.branchName,
        location: this.location,
        manager: this.manager,
        numberOfCustomers: this.customers.length
      };
    }
  }
  
  // Usage: there are two sets of branches that have branch information
  //branch A and branch B contain different information about branches
  const branchInfoA = {
    branchName: "Branch A",
    location: "123 Main St",
    manager: "Mr A"
  };
  
  const branchInfoB = {
    branchName: "Branch B",
    location: "456 Park Ave",
    manager: "Ms A"
  };
  
  //print out the branch information of each instance
  const branchA = new BankBranch(branchInfoA);
  const branchB = new BankBranch(branchInfoB);
  
  console.log(branchA.getBranchInfo());
  console.log(branchB.getBranchInfo());
  console.log(branchA === branchB); // This verifies that branch A and branch B are the same isntaces (Output: true)
                                    //branch A and branch B outputs true due to to the singleton pattern