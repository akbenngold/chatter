import React from "react";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Discover Stories That Inspire</h1>
          <p className="py-6">
            Mirror to the world. Your space to read, write, and share ideas.
            Join a community of thinkers, storytellers, and innovators.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
