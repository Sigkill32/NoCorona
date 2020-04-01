import React from "react";
import Graph from "./Graph";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Author from "./Author";
import Comments from "./comments";

const Info = () => {
  return (
    <div className="info">
      <div className="header">
        <h1>Who's winning ? (vir)us ?</h1>
        <a href="#author">By Manoj Bhat</a>
      </div>
      {/* <Author /> */}
      <div className="section">
        <h2>Introduction</h2>
        <p>
          Corna virus has become a part of our lives. A pandamic that will shape
          human history as we know it. I certainly don't need to get into the
          details of the infection as everyone is well aware of it's nature. But
          I would like to address something that is less spoken. We see lot of
          numbers on the news, but what does it all mean ? <br />
          where exactly are we in the battle against the pandamic ?
          <br />I will try to answer these questions in this article.
        </p>
      </div>
      <Graph />
      <div className="section">
        <h2>Exponential growth or is it ?</h2>
        <p>
          As we can see from the above graph the number of infected cases is
          growing exponentially in India. Viral infections are prefect examples
          of an exponential functions. <br />
          But is it really how we should see it ? <br />
          One important property of an exponential function is that it keeps
          increasing infinitely. But that isn't true in the real world. The
          infection can only spread to a finite number of people even if we
          don't take any measures to prevent it's spreading, because human
          population is finite. So the exponential spreading has to stop at some
          point and revert back.
        </p>
      </div>
      <div className="section">
        <h2>Enter Logistic function</h2>
        <p>
          Logistic curve is a sigmoid function with the equation (
          <a href="https://en.wikipedia.org/wiki/Logistic_function">
            Read more
          </a>
          ).
          <BlockMath>{"f(x) = \\frac{L}{1+e^{-k(x-x_{0})}}"}</BlockMath>
          It was introduced to depict population growth. Population grows
          exponentially only till it hits a certain number. It cannot become
          infinite. The same function can be used to depict the spreading of a
          viral infection. An important property of this function that is useful
          to us is it's inflection point. Inflection point is where the
          exponential trend starts to reverse. Hitting this point would mean
          that we are returning back to normalcy.
        </p>
      </div>
      <div className="section">
        <h2>Finding the closest fitting curve</h2>
        <p>
          The real challenge is to find the closest fitting curve. There are a
          number of things that could go wrong in the process. To make proper
          predictions, we need clean data. As the testing per million population
          of India is the lowest in the world (21/million when I wrote this
          article), the real numbers are unknown. With this kind of inconsistent
          data it isn't possible to predict the inflection point. But we could
          still approximate the trend. Lets assume the following.
          <br />
          <br />
          <InlineMath>{"N_{d}"}</InlineMath> = number of people already infected
          on a given day.
          <br />
          <InlineMath>E</InlineMath> = number of people who are exposed to a the
          infection on a given day.
          <br />
          <InlineMath>p</InlineMath> = probability that the each exposure E
          becomes an infected case.
          <br />
          <br />
          As the virus can infect a only a finite number of people, the
          probability of an exposure becoming a new case would have to have some
          factor to account for the probability that the person you are exposed
          to is already infected.
          <br />
          <BlockMath>{"p = 1 - \\frac{N}{Total Population}"}</BlockMath>
          <br />
          Number of new cases on a given day{" "}
          <BlockMath>{"\\Delta N_{d} = E_{avg} * p * N_{d}"}</BlockMath>
          <br />
          If we extrapolate this to the next day,
          <br />
          <br />
          Number of cases on day <InlineMath>d+1</InlineMath>:
          <BlockMath>{"N_{d+1} = N_{d} + E_{avg} * p * N_{d}"}</BlockMath>
          <BlockMath>{"N_{d+1} = (1 + E_{avg} * p)N_{d}"}</BlockMath>
          <br />
          <br />
          We can observe that we are multiplying by a constant grater than one
          each day get that day's infection count.
          <br />
          Number of cases of <InlineMath>d</InlineMath> days.
          <BlockMath>{"N_{d+1} = N_{d}(1 + E_{avg} * p)^d"}</BlockMath>
          <br />
          <br />
          If you were to plot this equation on a graph we'll end up with a
          logistic curve.
          <br />
          One thing we can keep tack of, is the growth rate.
          <br />
          <br />
          <BlockMath>
            {
              "growth rate = \\frac{\\text{No of cases on a given day}}{\\text{No of cases the previous day}}"
            }
          </BlockMath>
          <br />
          <br />
          While we are on the exponential part of the logistic curve, this
          factor stays well above <InlineMath>1</InlineMath>. When the growth
          factor hits closer to <InlineMath>1</InlineMath> and roughly remains
          the same, it's a sign that we've hit the inflection point.
          <br />
        </p>
      </div>
      <div className="section">
        <h2>Conclusion</h2>
        <p>
          From the previous section we can infer that in order to hit the
          inflection, we need to reduce <InlineMath>{"E_{avg}*p"}</InlineMath>.
          Which can be achieved by reducing <InlineMath>E</InlineMath>. This can
          be done by keeping yourself away from the infected. So let's stay home
          and make the curve hit the inflection point.
        </p>
      </div>
      <div className="about" id="author">
        <Author />
      </div>
      <Comments />
    </div>
  );
};

export default Info;
