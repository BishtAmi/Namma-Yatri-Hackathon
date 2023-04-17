import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Demo = () => {
    return ( 
        <div>
        <section id="contact">
        <div class="container-lg">
          <div class="text-center">
            <h2>Get in Touch</h2>
            <p class="lead">Questions to ask? Fill out the form to contact me directly...</p>
          </div>
          <div class="row justify-content-center my-5">
            <div class="col-lg-6">
              <form>
                <label for="email" class="form-label">Email address:</label>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="bi bi-envelope-fill text-secondary"></i>
                  </span>
                  <input type="text" id="email" class="form-control" placeholder="e.g. mario@example.com" />
                  {/* <!-- tooltip --> */}
                  <span class="input-group-text">
                    <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                      <i class="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>
                <label for="name" class="form-label">Name:</label>
                <div class="mb-4 input-group">
                  <span class="input-group-text">
                    <i class="bi bi-person-fill text-secondary"></i>
                  </span>
                  <input type="text" id="name" class="form-control" placeholder="e.g. Mario" />
                  {/* <!-- tooltip --> */}
                  <span class="input-group-text">
                    <span class="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                      <i class="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>
                <label for="subject" class="form-label">What is your question about?</label>
                <div class="mb-4 input-group">
                  <span class="input-group-text">
                    <i class="bi bi-chat-right-dots-fill text-secondary"></i>
                  </span>
                  <select class="form-select" id="subject">
                    <option value="pricing" selected>Pricing query</option>
                    <option value="content">Content query</option>
                    <option value="other">Other query</option>
                  </select>
                </div>
                <div class="mb-4 mt-5 form-floating">
                  <textarea class="form-control" id="query"  placeholder="query"></textarea>
                  <label for="query">Your query...</label>
                </div>
                <div class="mb-4 text-center">
                  <button type="submit" class="btn btn-secondary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
     );
}
 
export default Demo;