import React, { useState, useEffect, ChangeEvent } from "react";
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
  const [toggleBudget, setToggleBudget] = useState(false);
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
  
  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleBudget(e.target.checked);
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

  // Reduce the growth by 25%
  const growthFactor = 0.75;

  // calculates the height of the budget bar based on the percentage of the budget used
  const barHeight = `${percentageUsed * growthFactor}%`;

  // calculates the amount of the total budget that has been used
  const usedBudgetText = formatCurrency(usedBudget);

  // Set the budget bar background color based on whether the used budget is greater than the user budget
  const barColor = usedBudget > userBudget ? "#FF0000" : "#118C4F";

  // Calculate the percentage of the budget limit
  const percentageBudgetLimit = Math.round((userBudget / userBudget) * 100);

// Position the budget limit line
const budgetLimitPosition = `${147 - (percentageBudgetLimit * growthFactor)}%`;


 return (
    <div className="budget-container">
      <Form>
        <Form.Check
          type="switch"
          id="toggle-budget"
          label="Budget Feature"
          checked={toggleBudget}
          onChange={handleToggleChange}
        />
      </Form>
      {toggleBudget ? (
        <div className="budget">        
        <div className="budget-bar" style={{ height: barHeight, backgroundColor: barColor }} />
                {/* Add the budget limit line */}
                <div
          className="budget-limit-line"
          style={{ bottom: budgetLimitPosition }}
        >
          <span className="budget-limit-label">Budget Limit</span>
        </div>
          <div className="budget-info">
            <div className="budget-input">
              <label htmlFor="budget">Set Budget:</label>
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
            <div className="budget-amount">
              <span>Used: {usedBudgetText}</span>
              {/* <span> / {formatCurrency(userBudget)}</span> */}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
