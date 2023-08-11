package com.project.restaurant.respository;

import com.project.restaurant.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository  extends JpaRepository<Restaurant, Long> {
}
