import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    number : Text;
    service : Text;
    message : Text;
  };

  module Submission {
    public func compare(s1 : Submission, s2 : Submission) : Order.Order {
      Text.compare(s1.name, s2.name);
    };
  };

  var currentId = 0;
  let submissions = Map.empty<Nat, Submission>();

  public shared ({ caller }) func addSubmission(name : Text, number : Text, service : Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      number;
      service;
      message;
    };

    currentId += 1;
    submissions.add(currentId, newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };
};
