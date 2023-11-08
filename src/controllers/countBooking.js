
import Booking from "../models/Booking";

export const getBookingsCount = async (req, res) => {
  const { year } = req.query;

  try {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    // aggregation count within the specified year range
    const bookingsCount = await Booking.aggregate([
      {
        $match: {
          Date: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: { $month: "$Date" },
          count: { $sum: 1 },
        },
      },
    ]);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Format the response as an array of objects with month names as labels
    const response = months.map((monthName, index) => {
      const matchingMonth = bookingsCount.find(
        (entry) => entry._id === index + 1
      );
      return {
        label: monthName,
        count: matchingMonth ? matchingMonth.count : 0,
      };
    });

    res.status(200).json(response);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
