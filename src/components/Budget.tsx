import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Form } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import "./css/budget_styles.css";
import storeItems from "../data/items.json";

type BudgetProps = {
  totalBudget: number;
};

export const Budget = ({ totalBudget }: BudgetProps) => {
  const [userBudget, setUserBudget] = useState(totalBudget);
  const [usedBudget, setUsedBudget] = useState(0);
  const { cartItems } = useShoppingCart();

  // calculates the total amount spent in the cart and updates the usedBudget state
  const calculateUsedBudget = () => {
    const total = cartItems.reduce(
      (total, cartItem) => {
        const item = storeItems.find((i: { id: number }) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
      },
      0
    );
    setUsedBudget(total);
  };
  

  // updates the userBudget state when the user inputs a new value
  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBudget = parseInt(event.target.value, 10);
    setUserBudget(newBudget);
  };

  // calculates the total amount spent in the cart and updates the usedBudget state
useEffect(() => {
  calculateUsedBudget();
}, [cartItems, totalBudget]);

  // calculates the percentage of the total budget that has been used
  const percentageUsed = Math.round((usedBudget / userBudget) * 100);

  // calculates the height of the budget bar based on the percentage of the budget used
  const barHeight = `${percentageUsed}%`;

  // calculates the amount of the total budget that has been used
  const usedBudgetText = formatCurrency(usedBudget);

  // Set the budget bar background color based on whether the used budget is greater than the user budget
  const barColor = usedBudget > userBudget ? "#FF0000" : "#118C4F";

  return (
    <div className="budget">
      <div className="budget-bar" style={{ height: barHeight, backgroundColor: barColor }} />
      <div className="budget-info">
        <div className="budget-amount">
          <span>{usedBudgetText}</span>
          <span> / {formatCurrency(userBudget)}</span>
        </div>
        <div className="budget-input">
          <label htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={userBudget}
            min={5}
            max={5000}
            onChange={handleBudgetChange}
          />
        </div>
      </div>
    </div>
  );
};
