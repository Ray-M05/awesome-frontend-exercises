import {
    describeExcludedType,
    describeIntersectionType,
    describeMyInterface,
    describeMyType,
    IntersectionType,
    MyType
} from "./exercise-2";

describe("describeMyType", () => {
  it("should return a string describing the properties of MyType", () => {
    const myObject: MyType = {
      property1: "Hello",
      property2: 42,
      property3: true,
    };

    const result = describeMyType(myObject);
    expect(result).toBe(
      "Property1 is Hello and Property2 is 42 and Property3 is true"
    );
  });

  it("should handle different values correctly", () => {
    const myObject: MyType = {
      property1: "World",
      property2: 100,
      property3: false,
    };

    const result = describeMyType(myObject);
    expect(result).toBe(
      "Property1 is World and Property2 is 100 and Property3 is false"
    );
  });
});
describe("describeIntersectionType", () => {
  it("should return a string describing the properties of IntersectionType", () => {
    const intersectionObject: IntersectionType = {
      a: "World",
      b: 100,
    };

    const result = describeIntersectionType(intersectionObject);
    expect(result).toBe("Property a is World and Property b is 100");
  });

  it("should handle different values correctly", () => {
    const intersectionObject: IntersectionType = {
      a: "Hello",
      b: 42,
    };

    const result = describeIntersectionType(intersectionObject);
    expect(result).toBe("Property a is Hello and Property b is 42");
  });
});
describe("describeMyType", () => {
  it("should return a string describing the properties of MyType", () => {
    const myObject: MyType = {
      property1: "Hello",
      property2: 42,
      property3: true,
    };

    const result = describeMyType(myObject);
    expect(result).toBe(
      "Property1 is Hello and Property2 is 42 and Property3 is true"
    );
  });

  it("should handle different values correctly", () => {
    const myObject: MyType = {
      property1: "World",
      property2: 100,
      property3: false,
    };

    const result = describeMyType(myObject);
    expect(result).toBe(
      "Property1 is World and Property2 is 100 and Property3 is false"
    );
  });
});

describe("describeIntersectionType", () => {
  it("should return a string describing the properties of IntersectionType", () => {
    const intersectionObject: IntersectionType = {
      a: "World",
      b: 100,
    };

    const result = describeIntersectionType(intersectionObject);
    expect(result).toBe("Property a is World and Property b is 100");
  });

  it("should handle different values correctly", () => {
    const intersectionObject: IntersectionType = {
      a: "Hello",
      b: 42,
    };

    const result = describeIntersectionType(intersectionObject);
    expect(result).toBe("Property a is Hello and Property b is 42");
  });
});

describe("describeMyInterface", () => {
  it("should return a string describing the properties of MyInterface", () => {
    const myInterfaceObject = {
      prop1: "World",
      prop2: 100,
      prop3: true,
    };

    const result = describeMyInterface(myInterfaceObject);
    expect(result).toBe("Prop1 is World, Prop2 is 100, and Prop3 is true");
  });
});

describe("describeExcludedType", () => {
  it("should return a string describing the properties of ExcludedType", () => {
    const myInterfaceObject = {
      prop1: "World",
      prop3: true,
    };

    const result = describeExcludedType(myInterfaceObject);
    expect(result).toBe("Prop1 is World and Prop3 is true");
  });
});

describe("describeOmittedType", () => {
  it("should return a string describing the properties of describeOmittedType", () => {
    const myInterfaceObject = {
      prop1: "World",
      prop3: true,
    };

    const result = describeExcludedType(myInterfaceObject);
    expect(result).toBe("Prop1 is World and Prop3 is true");
  });
});
