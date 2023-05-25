
# FIRST PRIORITY 
## Sign-in/Sign-up - yes
This step requires the creation of two types of user profiles: travelers and property owners, registering the new users and logging in existing ones. To add this feature, we will use Devise and CanCanCan Ruby gems.

## User Profile for Host and Guest -yes
The host can create a profile for his apartment (or apartments) and accept payments. The traveler looks for the condo in the necessary location and books it for the required dates. Having added their billing details, the traveler pays the amount required.

## Property Listing -yes
Having created the profile for the apartment, the host adds its physical address. Therefore, the house can be displayed on a map. The property owner also describes the condo. Then adds photos and sets the rules and the price. When the profile is published, the property becomes publicly available. Therefore it is displayed in the search results.


## Search & Filtering -yes 
To find a flat or a house, travelers enter the location and add filtering criteria. Like a type of apartment, price, number of rooms, beds, smoking/non-smoking, pet friendliness, etc. The system filters the properties available in this location. Then displays the most relevant results according to the customer’s requirements. The search & filtering system can be implemented with the help of ElasticSearch.

## Booking System -yes
After finding a place to stay, tourists move to the booking. The user should enter all the required details and click the booking button to book an apartment.

Usually, the booking confirmation proceeds automatically for the guests with verified profiles. But in some cases, the guests should wait until the host approves the booking.

Besides the booking, this feature usually includes observing and managing all the bookings.

------------------------------------------------------------------
# SECOND PRIORITY

## Maps Integration - optional
As part of the general Airbnb search, the map also serves as a separate tool when a guest is looking for a particular location.  

All the available accommodations will appear on the map when you zoom in to the desired location. It is also possible to click the total on the map to see a quick preview.

## Feedback- optional
Upon finishing the trip, the traveler can rate the apartment. Also, it is possible to leave feedback about the living conditions and the communication with the host. The property owner can also rate the customers who live in his house.

## Notifications - optional
For users to stay informed about the activities on their profile, the system will send notifications to their mobile device or desktop. For example, property owners will be notified about new apartment bookings.

--------------------------------------------------------------------------------------

# GOOD TO HAVE

## Payment Integration - optional
To allow both parties to send and accept the payments, we integrated Stripe as a perfect payment tool with a highly-ranked security option.



## Admin Panel - optional
An admin panel must manage user accounts and property profiles and handle financial issues. We can develop an admin dashboard by using the ActiveAdmin and RailsAdmin gems

## Messenger - low priority
To give travelers the possibility to discuss any details with their hosts, we will introduce a built-in messaging system.

## Localization - low priority optional
To make the application available to users from different countries, we will localize it to several languages. For example, English and the language of the target country. This can be done using the internationalization & localization system to get a text.
