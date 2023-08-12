package com.project.restaurant.respository;

import com.project.restaurant.entity.FoodCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FoodCategoryRepository extends JpaRepository<FoodCategory, Long>
{

}
