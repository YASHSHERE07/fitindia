import React from "react";

const PlanCards = ({ mealPlan, dietType }) => {
  const mealOrder = [
    "breakfast",
    "morningSnack",
    "lunch",
    "afternoonSnack",
    "dinner",
  ];

  const mealTitles = {
    breakfast: "🍳 Breakfast",
    morningSnack: "☕ Morning Snack",
    lunch: "🥗 Lunch",
    afternoonSnack: "🍵 Afternoon Snack",
    dinner: "🍽️ Dinner",
  };

  const palette = {
    vegetarian: {
      primary: "#388E3C",
      secondary: "#A5D6A7",
      accent: "#E8F5E9",
      gradient: "linear-gradient(135deg, #388E3C 0%, #8BC34A 100%)",
    },
    nonVegetarian: {
      primary: "#D32F2F",
      secondary: "#EF9A9A",
      accent: "#FFEBEE",
      gradient: "linear-gradient(135deg, #D32F2F 0%, #F44336 100%)",
    },
    neutral: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  };

  const colors =
    dietType === "vegetarian" ? palette.vegetarian : palette.nonVegetarian;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 px-4">
      {mealPlan?.days?.map((day) => {
        const rawMeals = day.meals;
        const normalizedMeals = {};

        Object.keys(rawMeals).forEach((key) => {
          const lower = key.toLowerCase();
          if (lower === "snack1" || lower === "snack")
            normalizedMeals["morningSnack"] = rawMeals[key];
          else if (lower === "snack2" || lower === "eveningsnack")
            normalizedMeals["afternoonSnack"] = rawMeals[key];
          else normalizedMeals[lower] = rawMeals[key];
        });

        return (
          <div
            key={day.day}
            className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg group"
            style={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              border: `1px solid ${palette.neutral[200]}`,
              willChange: "transform",
            }}
          >
            <div
              className="px-6 py-5 relative overflow-hidden"
              style={{ background: colors.gradient }}
            >
              <div className="relative z-10 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Day {day.day}
                </h3>
                <span
                  className="text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {dietType === "vegetarian" ? "Vegetarian" : "PROTEIN PLUS"}
                </span>
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, white 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="p-6">
              {mealOrder.map((mealType) => {
                const meal = normalizedMeals[mealType];
                if (!meal) return null;

                return (
                  <div
                    key={mealType}
                    className="mb-6 last:mb-0 transition-colors duration-300 hover:bg-neutral-50 rounded-lg px-3 py-2"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-3 h-3 mt-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: colors.primary }}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-neutral-800">
                          <span style={{ color: colors.primary }}>
                            {mealTitles[mealType]}
                          </span>
                          <span className="text-neutral-500 ml-1.5 font-normal">
                            — {meal.name}
                          </span>
                        </h4>

                        <ul className="mt-3 space-y-2.5">
                          {meal.items.map((item, index) => (
                            <li
                              key={index}
                              className="flex justify-between items-baseline text-sm"
                            >
                              <span className="text-neutral-700">
                                <span className="text-neutral-400 mr-1.5">
                                  •
                                </span>
                                {item.item}
                              </span>
                              <span
                                className="font-medium px-2 py-0.5 rounded-full text-xs"
                                style={{
                                  backgroundColor: colors.accent,
                                  color: colors.primary,
                                }}
                              >
                                {item.amount}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {meal.note && (
                          <div
                            className="mt-3 text-xs italic pl-4 py-2 border-l-2"
                            style={{
                              color: palette.neutral[600],
                              borderColor: colors.secondary,
                            }}
                          >
                            {meal.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="px-6 py-3 text-xs text-center border-t"
              style={{
                borderColor: palette.neutral[200],
                backgroundColor: palette.neutral[50],
              }}
            >
              <span
                className="inline-block px-2 py-1 rounded-md"
                style={{
                  color: colors.primary,
                  backgroundColor: colors.accent,
                }}
              >
                Daily Calories: {day.totalCalories || "N/A"} kcal
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanCards;
 