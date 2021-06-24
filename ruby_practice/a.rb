require 'pry'

phrase = "Hello world"
puts phrase.upcase

first_number = 7
second_number = 14

sum = first_number + second_number

puts sum

def print_name(name)
  puts "In 2016, the president was #{name}"
end 

print_name("Nabil Hayet")

def greeting(name = "Nabil",language)
    puts "Hello #{name}, Are you a #{language} programmer?"
end 

greeting("Python")

3.times { print "Hello" }


3.times { puts "Hello" }

def return_name 
    "Jasmin Trina"
end 

def parrot(name="Squawk!")
    binding.pry 
    puts name
    name 
end 

parrot("Wack Wack")

all_odd = true
[1,2,3].each do |number|
  if number.even? # Will evaluate to false for 1, true for 2, false for 3
    all_odd = false
  end
end
all_odd 

all_odd = [1,3].all? do |number|
    number.odd? # Will evaluate to true for 1, true for 3
end #=> true
all_odd

[1,3].none?{|i| i.even?} #=> true

[1,2,100].any?{|i| i > 99} #=> true

the_numbers = [4,8,15,16,23,42]
the_numbers.include?(42)   #=> true

matches = []
[1,2,3,4,5].each do |i|
  matches << i if i.even? # add i to the matches array if it is even
end #=> [1,2,3,4,5]
matches #=> [2,4]

[1,2,3,4,5].select{|i| i.odd?} #=> [1,3,5]
 
[1,2,3].select{|i| i.is_a?(String)} #=> []

[1,2,3].detect{|i| i.odd?} #=> 1

[1,2,3].find{|i| i.odd?} #=> 1

[1,2].reject{|i| i.even?} #=> [1]

def my_find(collection)
    i = 0
    while i < collection.length
      yield(collection[i])
      i = i + 1
    end
  end

  nums.collect { |n| n * n }

  odds_and_evens.select do |n|
    n.even?
  end

  cats_and_dogs.delete_if do |pet|
    pet == "dog"
  end

  famous_cats.include?("Maru")

  quiet_and_loud.any? do |word|
    word == word.upcase
  end

def prime?(num)
 val=""
 count=0
 if (num<2)
  return false
 else
  i=2

  while(i<num)
   if (num%i==0)
    count+=1
   end
    i+=1
  end
 end

 if count>=1
  return false
 else
  return true
 end
end

array = [7, 3, 1, 2, 6, 5]
 
array.sort do |a, b|
  a <=> b
end
#  => [1, 2, 3, 5, 6, 7]

winner = ""
passengers.each do |suite, name|
  if suite == :suite_a && name.start_with?("A")
    winner = name
  end
end
 
winner

flatiron_school = {instructor: "Isaac Newton"}
flatiron_school = {:instructor => "Isaac Newton"}

flatiron_school = {
  instructors: ["Avi", "Jeff", "Rose"], 
  dev_team: ["Jonas", "Logan", "Amanda", "Seiji", "Kate", "Spencer"],
  students: ["Sarah", "you", "John", "David"]
}

instructors = flatiron_school[:instructors]
 # => ["Avi", "Jeff", "Rose"]

my_hash = {first: "i'm first!", second: "i'm second!"}
my_hash[:third] = "i'm third!"

groceries = {fruit: "Banana", vegetable: "Broccoli", dessert: "Cookie"}
 
groceries.values
#  => ["Banana", "Broccoli", "Cookie"]

groceries.keys
#  => [:fruit, :vegetable, :dessert]

groceries.values.flatten
#=> ["milk", "yogurt", "cheese", "carrots", "broccoli", "cucumbers", "chicken", "steak", "salmon", "rice", "pasta"]

groceries.values.flatten.min
#=> "broccoli"