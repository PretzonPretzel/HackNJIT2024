<template>
  <div class="home-container">
    <div class="home-content">
      <h1 class="store-title">Steampunk Cosplay</h1>
      <p class="text-content headline">Welcome to the ultimate haven for steampunk enthusiasts! Immerse yourself in a world where Victorian elegance meets futuristic innovation.</p>
      <h2 class="headline" style="font-weight: 700; padding-top: 2rem;">Featured Collections</h2>
      <!-- Cards -->
      <div class="card-group">
        <div class="card-container">
          <h3 class="card-header">Gadgets & Gizmos</h3>
          <p class="card-description">A handpicked selection of steampunk gadgets that blend form and function</p>
        </div>

        <div class="card-container">
          <h3 class="card-header">Victorian Attire</h3>
          <p class="card-description">Step into an era of sophisticated fashion with our range of Victorian-inspired clothing</p>
        </div>

        <div class="card-container">
          <h3 class="card-header">Accessories</h3>
          <p class="card-description">Complete your look with intricately designed accessories</p>
        </div>
      </div>

      <h2 class="headline" style="font-weight: 700; padding-top: 2rem;">Why Shop With Us?</h2>
      <div style="width: 100%; text-align: center; max-width: 500px;">
        <h3 class="extra-info-header">Authenticity</h3>
        <p class="extra-info-description">Each piece is carefully curated to ensure it meets the highest standards of steampunk aesthetics</p>
        <h3 class="extra-info-header">Quality</h3>
        <p class="extra-info-description">Our products are made from premium materials to guarantee durability and timeless style</p>
        <h3 class="extra-info-header">Community</h3>
        <p class="extra-info-description">Join a thriving community of steampunk enthusiasts, share your passion, and attend exclusive events</p>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.card-group {
  display: flex;
  justify-content: space-around;
  align-items: start;
  width: 100%;
}

.extra-info-description {
  font-size: 16px;
  padding-bottom: 1rem;
}
.extra-info-header {
  font-weight: 600;
  font-size: 18px;
}
.card-description {
  font-size: 13px;
  width: 200px;
}
.card-header {
  font-weight: 700;
  font-size: 16px;
  opacity: 0.75;
}
.card-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);

    .card-header {
      opacity: 1;
    }
  }

}

.headline {
  font-weight: 700;
  font-size: 20px;
}
.text-content {
  /* max-width: 75%; */
  text-align: center;
  font-size: 18px;
  text-wrap: balance;
}

.store-title {
  font-size: 32px;
  font-weight: 700;
}
.home-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
}

.home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  padding: 1rem 2rem;
  gap: 1rem;
}
</style>