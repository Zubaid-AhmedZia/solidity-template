// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;
//import "https://github.com/optionality/clone-factory/blob/master/contracts/CloneFactory.sol";

import "./CloneFactory.sol";

contract AirlineTicket {
    //     Task 03: Initialize the price of economy, business and first class seats as follows
    //   (be careful with units!):
    //   Economy price: 0.005 ether
    //   Business price: 0.007 ether
    //   First class price: 0.01 ether

    uint256 public FirstClassPrice = 5e15;
    uint256 public BusinessClassPrice = 7e15;
    uint256 public EconomyClassPrice = 1e16;
    uint256 public remaining;

    //     You need to make a custom modifier that allows certain addresses to call a function.

    //   Task 05: Make the two functions that add and remove addresses from the allowed list of addresses.
    //   (Here’s a catch, both functions should implement the modifier.)

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    //task5
    modifier onlyOwner() {
        require(msg.sender == owner, "only owner allowed");
        _;
    }
    //task5
    modifier onlyWhitelisted() {
        require(isWhitelisted(msg.sender), "not white listed");
        _;
    }

    //  Task 01: Make a function that takes input (name, destination and passport ID) from the user and stores it.
    //(Hint: Use mappings and structs)

    enum PlaneClass {
        firstclass,
        businessclass,
        economy
    }

    struct Passenger {
        string name;
        string destination;
        uint256 passportID;
        string class;
    }

    mapping(address => Passenger) public passenger;
    mapping(address => bool) public whiteListAddresses;

    //Passenger[] public passengers;

    //       Task 02: You also need to add the option for the user to choose one of the three classes
    //   (first class, business, and economy) and store it with the previous information.
    //   (Hint: There is a special data type you can use to solve this trick in a jiffy!)

    function selectClass(PlaneClass _class) internal pure returns (string memory class) {
        // Error handling for input
        require(uint8(_class) <= 2);
        // Loop through possible options
        if (PlaneClass.firstclass == _class) return "first";
        if (PlaneClass.businessclass == _class) return "business";
        if (PlaneClass.economy == _class) return "economy";
    }

    function passengerData(
        string memory _name,
        string memory _destination,
        uint256 _passportID,
        PlaneClass _class
    ) public returns (bool) {
        passenger[msg.sender].name = _name;
        passenger[msg.sender].destination = _destination;
        passenger[msg.sender].passportID = _passportID;
        passenger[msg.sender].class = selectClass(_class);

        return true;
    }

    //     Did you know that your contract can send and withdraw ethers? That’s what this task is all about.

    //   Task 04: Make a function that receives ethers on a successful ticket booking.
    //   (Hint: You’ll need to to add a certain modifier to the function)

    function receiveEther(
        string memory _name,
        string memory _destination,
        uint256 _passportID,
        PlaneClass _class
    ) public payable {
        require(
            EconomyClassPrice <= msg.value || BusinessClassPrice <= msg.value || FirstClassPrice <= msg.value,
            "not enough ether"
        );

        passengerData(_name, _destination, _passportID, _class);
    }

    // function checkBalance() public view returns(uint) {

    //     return address(this).balance;
    //

    // }

    function add(address _whiteListAddress) public onlyOwner {
        whiteListAddresses[_whiteListAddress] = true;
    }

    function remove(address _whiteListAddress) public onlyOwner {
        whiteListAddresses[_whiteListAddress] = false;
    }

    function isWhitelisted(address _address) public view returns (bool) {
        return whiteListAddresses[_address];
    }
}

// Task 06: Make a parent contract that has the ability to deploy child contracts
//   (This function should implement the modifier you made in ‘Task 05’).
contract AirlineTicketFactory is CloneFactory, AirlineTicket {
    address public libraryAddress;

    event ticketCreated(address newTicket);

    function setLibraryAddress(address _libraryAddress) public onlyWhitelisted {
        libraryAddress = _libraryAddress;
    }

    function createTicket() public onlyWhitelisted {
        address clone = createClone(libraryAddress);
        AirlineTicket(clone);
        emit ticketCreated(clone);
    }
}
