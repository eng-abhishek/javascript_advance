class RalwayServices {
  ticketBooking() {
    console.log(
      `${this.name} your Ticket Booked for the train number ${this.train_no}`
    );
  }

  ticketCancel() {
    console.log(
      `${this.name} your Ticket Cancelled for the train number ${this.train_no}`
    );
  }

  formfill(name, train_no) {
    this.name = name;
    this.train_no = train_no;
    console.log(
      `${this.name} your form is filled for the train Number ${this.train_no}`
    );
  }
}

let obj = new RalwayServices();
obj.formfill("abhi", "124578");
obj.ticketBooking();
obj.ticketCancel();

let obj1 = new RalwayServices();
obj1.formfill("maa", "5012420");
obj1.ticketBooking();
