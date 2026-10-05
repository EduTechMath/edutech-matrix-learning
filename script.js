const materialData = {
  PK: [
    {
      id: 'quadratic-function',
      name: 'Quadratic Function',
      description: 'Understand quadratic function form, vertex, roots, and parabola graphs.',
      definition: 'A quadratic function is a function in the form f(x) = ax² + bx + c, where a ≠ 0. Its graph is a parabola.',
      formulas: [
        { label: 'General form', value: 'f(x) = ax² + bx + c' },
        { label: 'Vertex', value: 'x = -b / (2a), y = f(x_v)' },
        { label: 'Discriminant', value: 'D = b² - 4ac' }
      ],
      examples: [
        {
          title: 'Worked example 1',
          steps: [
            'Given f(x) = x² - 4x + 3.',
            'Coefficients are a = 1, b = -4, c = 3.',
            'Vertex x = -(-4)/(2×1) = 2.',
            'y = 2² - 4(2) + 3 = -1.',
            'So the vertex is (2, -1).'
          ]
        },
        {
          title: 'Worked example 2',
          steps: [
            'Given roots x² - 5x + 6 = 0.',
            'Factor it into (x - 2)(x - 3) = 0.',
            'Therefore the roots are x = 2 and x = 3.'
          ]
        }
      ],
      questionPool: [
        ['The values of a, b, and c in f(x) = 2x² - 5x + 3 are ...', ['2, 5, 3', '2, -5, 3', '-2, -5, 3', '2, -5, -3'], 1, 'In general form ax² + bx + c, a=2, b=-5, c=3.'],
        ['Given f(x) = 6 - x - x². The coefficients a and c are ...', ['a=1, c=6', 'a=-1, c=-1', 'a=-1, c=6', 'a=6, c=-1'], 2, 'Rewrite as -x² - x + 6, so a=-1 and c=6.'],
        ['If f(x) = x(x - 4) + 5 is written in general form ax² + bx + c, then b is ...', ['-4', '4', '5', '1'], 0, 'Expand to x² - 4x + 5, so b=-4.'],
        ['For the function f(x) = 3x² + 8, the value of a + b + c is ...', ['11', '8', '3', '0'], 0, 'Here a=3, b=0, c=8, so a+b+c=11.'],
        ['If f(x) = -2x² + 4x - 1, then 2a - b + c is ...', ['-9', '-7', '-1', '1'], 0, 'Substitute a=-2, b=4, c=-1: -4-4-1=-9.'],
        ['The general form of f(x) = (x - 3)² + 2 is ...', ['x² - 6x + 11', 'x² - 6x + 7', 'x² + 6x + 11', 'x² - 9x + 2'], 0, 'x²-6x+9+2 = x²-6x+11.'],
        ['The value of f(3) for f(x) = x² - 2x + 5 is ...', ['6', '8', '10', '12'], 1, 'f(3)=9-6+5=8.'],
        ['If f(x) = 2x² - kx + 1 and f(2) = 5, then k is ...', ['1', '2', '3', '4'], 1, '8-2k+1=5, so 2k=4 and k=2.'],
        ['Given f(x) = ax² + 3x - 4. If f(-1) = -2, then a is ...', ['3', '4', '5', '6'], 2, 'a-3-4=-2, so a=5.'],
        ['The image of x=-3 under f(x) = -x² + 4x + 2 is ...', ['-19', '-5', '1', '19'], 0, 'f(-3)=-9-12+2=-19.'],
        ['The discriminant of x² - 6x + 9 = 0 is ...', ['-36', '0', '12', '36'], 1, 'D=b²-4ac=36-36=0.'],
        ['The discriminant of f(x) = 2x² - 3x - 2 is ...', ['7', '16', '25', '32'], 2, 'D=(-3)²-4(2)(-2)=9+16=25.'],
        ['If f(x)=x²+4x+c and D=0, then c is ...', ['2', '4', '8', '16'], 1, '16-4c=0, so c=4.'],
        ['The value of p so that f(x)=px²-4x+2 has discriminant 16 is ...', ['0', '1', '2', '4'], 0, '16-8p=16, so p=0.'],
        ['The graph of f(x)=x²-2x+4 relative to the x-axis is ...', ['Cuts two points', 'Tangential', 'Does not cut', 'Cuts three points'], 2, 'D=4-16=-12<0, so it does not cut the x-axis.'],
        ['The sum of the roots x₁+x₂ of x²-7x+10=0 is ...', ['-10', '-7', '7', '10'], 2, 'Sum of roots = -b/a = 7.'],
        ['The product of the roots of 2x²+5x-3=0 is ...', ['-3/2', '-5/2', '3/2', '5/2'], 0, 'Product = c/a = -3/2.'],
        ['The type of roots of x²+3x+5=0 is ...', ['Real and distinct', 'Real repeated', 'Rational', 'Imaginary/non-real'], 3, 'D=9-20=-11<0, so the roots are non-real.'],
        ['The value of m so that f(x)=x²-mx+9 is tangent to the x-axis is ...', ['m=6', 'm=-6', 'm=6 or m=-6', 'm=0'], 2, 'D=m²-36=0, so m=±6.'],
        ['The condition for f(x)=3x²-6x+k not to intersect the x-axis is ...', ['k<3', 'k>3', 'k<-3', 'k>-3'], 1, 'D=36-12k<0, so k>3.'],
        ['The roots of x²-9=0 are ...', ['x=3 only', 'x=-3 or x=3', 'x=9 or x=-9', 'x=0'], 1, 'x²=9, so x=±3.'],
        ['The zero points of f(x)=x²-5x+6 are ...', ['x=-2 or -3', 'x=2 or 3', 'x=1 or 6', 'x=-1 or -6'], 1, 'x²-5x+6=(x-2)(x-3).'],
        ['The roots of x²+7x+12=0 are ...', ['3 and 4', '-3 and -4', '-2 and -6', '2 and 6'], 1, 'Factor as (x+3)(x+4), so roots are -3 and -4.'],
        ['The roots of x²-2x-8=0 are ...', ['4 and -2', '-4 and 2', '8 and -1', '-8 and 1'], 0, 'Factor as (x-4)(x+2).'],
        ['The values of x satisfying 2x²-7x+3=0 are ...', ['3 or 1/2', '-3 or -1/2', '3 or 2', '7 or 3'], 0, 'Factor as (2x-1)(x-3), so x=1/2 or 3.'],
        ['If one root of x²+bx-12=0 is x=3, then b is ...', ['1', '2', '3', '4'], 0, '9+3b-12=0, so b=1.'],
        ['The zero points of f(x)=3x²-12x are ...', ['x=0 and x=4', 'x=0 and x=-4', 'x=3 and x=12', 'x=4 only'], 0, '3x(x-4)=0, giving x=0 or 4.'],
        ['If the roots of x²-8x+15=0 are p and q, then p²+q² is ...', ['34', '49', '64', '94'], 0, 'p²+q²=(p+q)²-2pq=64-30=34.'],
        ['The solution set of x²+6x+9=0 is ...', ['{-3,3}', '{-3}', '{3}', '{-9,1}'], 1, '(x+3)²=0, so the set is {-3}.'],
        ['The x-intercepts of f(x)=x²-x-6 are ...', ['(3,0) and (-2,0)', '(-3,0) and (2,0)', '(6,0) and (-1,0)', '(0,-6)'], 0, 'x²-x-6=(x-3)(x+2).'],
        ['The axis of symmetry of f(x)=x²-6x+8 is ...', ['x=-6', 'x=-3', 'x=3', 'x=6'], 2, 'x=-b/(2a)=6/2=3.'],
        ['The axis of symmetry of f(x)=-2x²+8x-5 is ...', ['x=-2', 'x=2', 'x=4', 'x=8'], 1, 'x=-8/(-4)=2.'],
        ['The vertex coordinates of f(x)=x²-4x+3 are ...', ['(2,-1)', '(-2,15)', '(2,1)', '(4,3)'], 0, 'x=2 and f(2)=-1, so (2,-1).'],
        ['The minimum value of f(x)=x²+2x-8 is ...', ['-9', '-8', '-1', '1'], 0, 'The vertex is at x=-1 and f(-1)=-9.'],
        ['The turning point of f(x)=-x²+6x-5 is ...', ['(3,4)', '(-3,-32)', '(3,-4)', '(6,-5)'], 0, 'x=3 and f(3)=4.'],
        ['If the vertex of f(x)=x²-bx+5 is at x=3, then b is ...', ['3', '6', '9', '12'], 1, 'b/(2)=3, so b=6.'],
        ['The vertex coordinates of f(x)=2x²+4x+1 are ...', ['(-1,-1)', '(1,7)', '(-1,1)', '(-2,1)'], 0, 'x=-1 and f(-1)=-1.'],
        ['If the graph ax²+12x+9 has axis of symmetry x=3, then a is ...', ['-2', '-1', '1', '2'], 0, '-12/(2a)=3, so a=-2.'],
        ['The minimum value of f(x)=3x²-12x+7 is ...', ['-5', '-2', '2', '7'], 0, 'x=2 and f(2)=-5.'],
        ['The maximum turning point of f(x)=-2x²-8x+3 is ...', ['(-2,11)', '(2,-21)', '(-2,3)', '(4,-61)'], 0, 'x=-2 and f(-2)=11.'],
        ['The direction of opening for f(x)=-x²+3x-2 is ...', ['Upward', 'Downward', 'Right', 'Left'], 1, 'a=-1<0, so the parabola opens downward.'],
        ['The y-intercept of f(x)=x²-4x-5 is ...', ['(0,5)', '(0,-5)', '(-5,0)', '(5,0)'], 1, 'The y-intercept is found at x=0, which gives (0,-5).'],
        ['The parabola 2x²+bx+c intersects the y-axis at (0,4). Then c is ...', ['2', '4', '-4', '8'], 1, 'When x=0, f(0)=c=4.'],
        ['The y-intercept of f(x)=3x²+5x-2 is ...', ['(0,-2)', '(0,3)', '(-2,0)', '(0,5)'], 0, 'At x=0, y=-2.'],
        ['If a>0 and D>0, the graph is ...', ['Opens downward', 'Opens upward and cuts two points', 'Opens upward and tangent', 'Opens downward and tangent'], 1, 'a>0 means opening upward and D>0 means two intersections.'],
        ['If a<0 and D<0, the graph is ...', ['Entirely above', 'Entirely below', 'Tangent from below', 'Cuts two points'], 1, 'a<0 and no real roots means the graph is entirely below the x-axis.'],
        ['The property of f(x)=(x-1)²-4 is ...', ['Opens downward, vertex (1,-4)', 'Opens upward, vertex (1,-4)', 'Opens upward, vertex (-1,4)', 'Opens downward, vertex (-1,-4)'], 1, 'The vertex form shows the vertex (1,-4) and a=1.'],
        ['A function with vertex (2,-1) and passing through (0,3) is ...', ['x²-4x+3', 'x²+4x+3', '2x²-8x+3', 'x²-2x+3'], 0, 'The form (x-2)²-1 = x²-4x+3.'],
        ['A function crossing the x-axis at (1,0) and (3,0) and passing through (0,3) is ...', ['x²-4x+3', 'x²+4x-3', '-x²+4x-3', '2x²-8x+6'], 0, 'Roots 1 and 3 give (x-1)(x-3)=x²-4x+3.'],
        ['The maximum height of h(t)=40t-5t² is ...', ['40 meters', '80 meters', '100 meters', '160 meters'], 1, 'The vertex is at t=4, so h(4)=160-80=80 meters.']
      ],
      questions: { mudah: [], sedang: [], susah: [] }
    },
    {
      id: 'linear-programming',
      name: 'Linear Programming',
      description: 'Solve optimization problems using objective functions and feasible regions.',
      definition: 'Linear programming is a method for determining the optimum value of an objective function with constraints in the form of linear inequalities.',
      formulas: [
        { label: 'Objective function', value: 'Z = ax + by' },
        { label: 'Feasible region', value: 'Set of points satisfying all constraints' },
        { label: 'Optimum value', value: 'Found at the corner points of the feasible region' }
      ],
      examples: [
        {
          title: 'Worked example 1',
          steps: [
            'Constraints: x + y ≤ 8, x ≥ 0, y ≥ 0.',
            'The feasible region lies in quadrant I and below the line x + y = 8.',
            'Corner points are (0,0), (8,0), and (0,8).'
          ]
        },
        {
          title: 'Worked example 2',
          steps: [
            'If Z = 3x + 4y, evaluate the corner points.',
            'At (0,8), Z = 32.',
            'At (8,0), Z = 24.',
            'So the maximum value is 32.'
          ]
        }
      ],
      questions: {
        mudah: [
          { prompt: 'The feasible region for x ≥ 0 and y ≥ 0 is ...', visual: 'kuadran-satu', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], answer: 0, explanation: 'x ≥ 0 and y ≥ 0 show the region in Quadrant I.' },
          { prompt: 'For the objective function Z = 2x + 3y, the value of Z at (1,2) is ...', options: ['5', '6', '7', '8'], answer: 3, explanation: 'Z = 2(1) + 3(2) = 8.' }
        ],
        sedang: [
          { prompt: 'If Z = 4x + 5y, and the corner points are (0,6), (3,0), and (2,2), the maximum value of Z is ...', options: ['18', '24', '30', '32'], answer: 2, explanation: 'Z(0,6)=30, Z(3,0)=12, Z(2,2)=18. So the maximum is 30.' },
          { prompt: 'The constraints x + y ≤ 10, x ≥ 0, y ≥ 0. The possible corner points are ...', visual: 'program-linear', options: ['(0,0), (10,0), (0,10)', '(0,0), (5,5), (0,10)', '(0,0), (5,0), (0,5)', '(10,0), (0,10), (5,5)'], answer: 0, explanation: 'The corner points are (0,0), (10,0), and (0,10).' }
        ],
        susah: [
          { prompt: 'Given the objective function Z = 5x + 4y with constraints x + y ≤ 8, x ≥ 0, y ≥ 0, x ≤ 5. The maximum value of Z occurs at ...', visual: 'program-linear', subPoints: ['Evaluate the corner points', 'Use the objective function', 'Compare the results'], options: ['(0,8)', '(5,3)', '(5,0)', '(3,5)'], answer: 1, explanation: 'At (5,3), Z = 5(5) + 4(3) = 37, which is the maximum.' },
          { prompt: 'The feasible region of the system x + y ≤ 6, x ≥ 1, y ≥ 2. Its corner points are ...', visual: 'program-linear', subPoints: ['Find the x and y boundaries', 'Calculate the intersection points', 'Choose the corner points that satisfy all constraints'], options: ['(1,2), (1,5), (4,2)', '(1,2), (1,6), (4,2)', '(1,2), (4,2), (2,4)', '(1,5), (4,2), (2,4)'], answer: 0, explanation: 'With x ≥ 1, y ≥ 2, x + y ≤ 6, the corner points are (1,2), (1,5), and (4,2).' }
        ]
      }
    },
    {
      id: 'functions',
      name: 'Functions',
      description: 'Learn functions, domain, range, and how to evaluate function values.',
      definition: 'A function is a special relationship that pairs every element of the domain with exactly one element of the codomain.',
      formulas: [
        { label: 'Function notation', value: 'f(x) = ax + b' },
        { label: 'Domain', value: 'Set of all input values' },
        { label: 'Range', value: 'Set of all output values' }
      ],
      examples: [
        { title: 'Worked example 1', steps: ['Given f(x) = 3x + 2.', 'Then f(4) = 3(4) + 2 = 14.', 'So the function value at x = 4 is 14.'] },
        { title: 'Worked example 2', steps: ['In f(x) = x + 3, all real x can be used.', 'The range is also all real numbers.', 'So the domain and range are all real numbers.'] }
      ],
      questions: {
        mudah: [
          { prompt: 'If f(x) = 2x + 1, then f(3) = ...', options: ['5', '6', '7', '8'], answer: 2, explanation: 'f(3) = 2(3) + 1 = 7.' },
          { prompt: 'A relation is called a function if ...', options: ['each domain element is paired with one codomain element', 'all codomain elements are equal', 'each domain element has two pairs', 'codomain elements are more numerous than domain elements'], answer: 0, explanation: 'A function pairs each domain element with exactly one codomain element.' }
        ],
        sedang: [
          { prompt: 'Given f(x) = x² - 3x + 2. The value of f(2) is ...', options: ['0', '1', '2', '4'], answer: 0, explanation: 'f(2) = 4 - 6 + 2 = 0.' },
          { prompt: 'If f(x) = 5x - 4 and f(a) = 11, then a = ...', options: ['2', '3', '4', '5'], answer: 1, explanation: '5a - 4 = 11 → 5a = 15 → a = 3.' }
        ],
        susah: [
          { prompt: 'Given f(x) = 3x + 2 and g(x) = x² - 1. The value of (g o f)(1) is ...', subPoints: ['Calculate f(1) first', 'Substitute the result into g(x)', 'Solve the operation'], options: ['3', '8', '10', '24'], answer: 3, explanation: 'f(1)=5, then g(5)=25-1=24.' },
          { prompt: 'If f(x) = 2x + 1 and f(a) = 9, then a² + 1 is ...', subPoints: ['Find a from the equation f(a)=9', 'Continue by calculating a² + 1'], options: ['10', '13', '17', '20'], answer: 2, explanation: '2a + 1 = 9 → a = 4, so a² + 1 = 17.' }
        ]
      }
    }
  ],
  PM: [
    {
      id: 'social-arithmetic',
      name: 'Social Arithmetic',
      description: 'Apply math concepts to buying, selling, discounts, taxes, and profit.',
      definition: 'Social arithmetic is the application of arithmetic operations to economic activities such as selling price, buying price, profit, loss, discount, and tax.',
      formulas: [
        { label: 'Profit', value: 'Profit = selling price - buying price' },
        { label: 'Loss', value: 'Loss = buying price - selling price' },
        { label: 'Percentage', value: 'Percentage = (part / total) × 100%' }
      ],
      examples: [
        { title: 'Worked example 1', steps: ['Initial price Rp120,000 and a 15% discount.', 'Discount = 15% × 120,000 = 18,000.', 'Final price = 120,000 - 18,000 = 102,000.'] },
        { title: 'Worked example 2', steps: ['Buying price Rp80,000 and selling price Rp96,000.', 'Profit = 96,000 - 80,000 = 16,000.', 'Profit percentage = 16,000 / 80,000 × 100% = 20%.'] }
      ],
      questions: {
        mudah: [
          { prompt: 'If the buying price is Rp50,000 and the selling price is Rp60,000, then the profit is ...', options: ['Rp5,000', 'Rp10,000', 'Rp15,000', 'Rp20,000'], answer: 1, explanation: 'Profit = 60,000 - 50,000 = 10,000.' },
          { prompt: 'A 20% discount on Rp100,000 is ...', options: ['Rp10,000', 'Rp15,000', 'Rp20,000', 'Rp25,000'], answer: 2, explanation: '20% × 100,000 = 20,000.' }
        ],
        sedang: [
          { prompt: 'A merchant buys an item for Rp160,000 and sells it with a 25% profit. The selling price is ...', options: ['Rp180,000', 'Rp190,000', 'Rp200,000', 'Rp210,000'], answer: 2, explanation: 'Profit = 25% × 160,000 = 40,000, so selling price = 200,000.' },
          { prompt: 'A bag is sold for Rp240,000 after a 20% discount. The original price was ...', options: ['Rp260,000', 'Rp280,000', 'Rp300,000', 'Rp320,000'], answer: 2, explanation: 'Final price = 80% × original price, so original price = 240,000 / 0.8 = 300,000.' }
        ],
        susah: [
          { prompt: 'A shop gives a 10% discount and then 5%. If the original price is Rp200,000, what is the final price?', subPoints: ['Calculate the first discount', 'Find the price after the first discount', 'Continue with the second discount'], options: ['Rp171,000', 'Rp180,000', 'Rp190,000', 'Rp171,500'], answer: 0, explanation: 'Price after 10% discount = 180,000. 5% of 180,000 = 9,000, so final price = 171,000.' },
          { prompt: 'The buying price of an item is Rp150,000. If you want a 30% profit based on cost, what selling price should be set?', subPoints: ['Calculate the profit', 'Add it to the buying price', 'Write the final answer'], options: ['Rp180,000', 'Rp185,000', 'Rp195,000', 'Rp200,000'], answer: 2, explanation: 'Profit = 30% × 150,000 = 45,000, so selling price = 195,000.' }
        ]
      }
    },
    {
      id: 'statistics',
      name: 'Statistics',
      description: 'Organize data, compute mean, median, mode, and read data displays.',
      definition: 'Statistics is a branch of mathematics that studies how to collect, present, analyze, and interpret data.',
      formulas: [
        { label: 'Mean', value: 'Mean = total data / number of data' },
        { label: 'Median', value: 'Median is the middle value of ordered data' },
        { label: 'Mode', value: 'Mode is the value that appears most often' }
      ],
      examples: [
        { title: 'Worked example 1', steps: ['Data: 5, 6, 7, 8, 9.', 'Total data = 35.', 'Number of data = 5.', 'Mean = 35 / 5 = 7.'] },
        { title: 'Worked example 2', steps: ['Data: 2,3,3,4,5,3.', 'The number 3 appears most often.', 'So the mode is 3.'] }
      ],
      questions: {
        mudah: [
          { prompt: 'The mean of the data 4,5,6,7,8 is ...', options: ['5', '6', '7', '8'], answer: 1, explanation: 'Total data = 30, number of data = 5, so mean = 6.' },
          { prompt: 'The mode of the data 3,4,4,5,6 is ...', options: ['3', '4', '5', '6'], answer: 1, explanation: 'The number 4 appears most often, so the mode is 4.' }
        ],
        sedang: [
          { prompt: 'The median of the data 1,3,4,5,7,8,9 is ...', options: ['4', '5', '6', '7'], answer: 1, explanation: 'The data are ordered and the middle value is 5.' },
          { prompt: 'Data 2,3,5,5,5,7. The mode is ...', options: ['2', '3', '5', '7'], answer: 2, explanation: 'The number 5 appears most often.' }
        ],
        susah: [
          { prompt: 'The median of the data 5,7,8,10,12,14,16,18 is ...', subPoints: ['Data is already ordered', 'Because there are 8 data points, take the two middle values', 'Calculate their average'], options: ['10', '11', '12', '13'], answer: 1, explanation: 'Median = average of the 4th and 5th data values = (10 + 12) / 2 = 11.' },
          { prompt: 'The mean of the data 2,4,6,8,10,12 is ...', subPoints: ['Add all the numbers', 'Divide by the number of data points', 'Simplify the result'], options: ['7', '7.5', '8', '8.5'], answer: 1, explanation: 'Total = 42, number = 6, so mean = 7.' }
        ]
      }
    },
    {
      id: 'probability',
      name: 'Probability',
      description: 'Calculate event likelihood based on sample spaces.',
      definition: 'Probability is the measure of how likely an event is to occur in an experiment.',
      formulas: [
        { label: 'Probability', value: 'P(A) = number of favorable outcomes / total number of outcomes' },
        { label: 'Complement probability', value: 'P(A^c) = 1 - P(A)' }
      ],
      examples: [
        { title: 'Worked example 1', steps: ['On a die, the sample space = {1,2,3,4,5,6}.', 'Even numbers = {2,4,6}.', 'Probability of an even number = 3/6 = 1/2.'] },
        { title: 'Worked example 2', steps: ['On a coin toss, the probability of heads = 1/2.', 'Probability of not heads = 1 - 1/2 = 1/2.'] }
      ],
      questions: {
        mudah: [
          { prompt: 'The probability of rolling a 5 on a die is ...', options: ['1/3', '1/6', '1/2', '5/6'], answer: 1, explanation: 'A six-sided die has one face showing 5, so the probability is 1/6.' },
          { prompt: 'When tossing a coin, the probability of heads is ...', options: ['1/2', '1/3', '2/3', '1'], answer: 0, explanation: 'A coin has two sides with equal chance of appearing.' }
        ],
        sedang: [
          { prompt: 'A bag contains 3 red balls and 2 blue balls. The probability of drawing a red ball is ...', options: ['2/5', '3/5', '1/3', '3/2'], answer: 1, explanation: 'Total balls = 5, so probability of red = 3/5.' },
          { prompt: 'If the probability of rain today is 0.7, then the probability of no rain is ...', options: ['0.3', '0.7', '0.5', '0.2'], answer: 0, explanation: 'Probability of no rain = 1 - 0.7 = 0.3.' }
        ],
        susah: [
          { prompt: 'Two coins are tossed together. The probability of getting exactly one head is ...', subPoints: ['Write all possible outcomes', 'Count the outcomes with exactly one head', 'Divide by the total outcomes'], options: ['1/4', '1/2', '3/4', '1'], answer: 1, explanation: 'Possible outcomes are GG, GA, AG, AA. Only GA and AG have exactly one head, so probability = 2/4 = 1/2.' },
          { prompt: 'A box contains 4 red balls, 3 blue balls, and 3 green balls. The probability of drawing a ball that is not blue is ...', subPoints: ['Count the total number of balls', 'Count the balls that are not blue', 'Compare the results'], options: ['3/10', '4/10', '7/10', '1/2'], answer: 2, explanation: 'Total balls = 10; non-blue balls = 4 + 3 = 7, so probability = 7/10.' }
        ]
      }
    },
    {
      id: 'plane-figures',
      name: 'Plane Figures',
      description: 'Study area, perimeter, and properties of plane figures.',
      definition: 'A plane figure is a two-dimensional shape with area and perimeter.',
      formulas: [
        { label: 'Area of a square', value: 'A = s²' },
        { label: 'Area of a triangle', value: 'A = 1/2 × a × h' },
        { label: 'Perimeter of a rectangle', value: 'P = 2(l + w)' }
      ],
      examples: [
        { title: 'Worked example 1', steps: ['Rectangle with length 8 cm and width 5 cm.', 'Area = 8 × 5 = 40 cm².', 'Perimeter = 2(8 + 5) = 26 cm.'] },
        { title: 'Worked example 2', steps: ['Triangle with base 10 cm and height 6 cm.', 'Area = 1/2 × 10 × 6 = 30 cm².'] }
      ],
      questions: {
        mudah: [
          { prompt: 'The area of a square with side 7 cm is ...', options: ['14 cm²', '21 cm²', '49 cm²', '56 cm²'], answer: 2, explanation: 'A = s² = 7² = 49 cm².' },
          { prompt: 'The perimeter of a rectangle 6 cm × 4 cm is ...', options: ['10 cm', '20 cm', '24 cm', '28 cm'], answer: 1, explanation: 'P = 2(6 + 4) = 20 cm.' }
        ],
        sedang: [
          { prompt: 'The area of a triangle with base 12 cm and height 8 cm is ...', options: ['24 cm²', '36 cm²', '48 cm²', '96 cm²'], answer: 2, explanation: 'A = 1/2 × 12 × 8 = 48 cm².' },
          { prompt: 'A parallelogram has base 10 cm and height 6 cm. Its area is ...', options: ['30 cm²', '40 cm²', '50 cm²', '60 cm²'], answer: 3, explanation: 'A = base × height = 10 × 6 = 60 cm².' }
        ],
        susah: [
          { prompt: 'The combined area of a rectangle 8 × 5 and a triangle with base 8 and height 6 is ...', subPoints: ['Calculate the rectangle area', 'Calculate the triangle area', 'Add them together'], options: ['40 cm²', '48 cm²', '64 cm²', '76 cm²'], answer: 2, explanation: 'Rectangle area = 40 and triangle area = 24, total = 64 cm².' },
          { prompt: 'The perimeter of a rectangle is 30 cm. If the length is 9 cm, what is the width?', subPoints: ['Use the perimeter formula', 'Check the equation', 'Solve for the width'], options: ['6 cm', '7 cm', '8 cm', '9 cm'], answer: 0, explanation: '2(l + w)=30 → l + w = 15 → 9 + w = 15 → w = 6 cm.' }
        ]
      }
    }
  ]
};

const materialTranslations = {
  en: {},
  id: {
    'quadratic-function': {
      name: 'Fungsi Kuadrat',
      description: 'Pahami bentuk fungsi kuadrat, titik puncak, akar, dan grafik parabola.',
      definition: 'Fungsi kuadrat adalah fungsi yang berbentuk f(x) = ax² + bx + c, dengan a ≠ 0. Grafiknya berbentuk parabola.',
      formulas: [
        { label: 'Bentuk umum', value: 'f(x) = ax² + bx + c' },
        { label: 'Titik puncak', value: 'x = -b / (2a), y = f(x_v)' },
        { label: 'Diskriminan', value: 'D = b² - 4ac' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Diketahui f(x) = x² - 4x + 3.',
            'Koefisiennya adalah a = 1, b = -4, c = 3.',
            'Titik puncak x = -(-4)/(2×1) = 2.',
            'y = 2² - 4(2) + 3 = -1.',
            'Jadi titik puncaknya adalah (2, -1).'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Diketahui akar x² - 5x + 6 = 0.',
            'Faktorkan menjadi (x - 2)(x - 3) = 0.',
            'Jadi akarnya adalah x = 2 dan x = 3.'
          ]
        }
      ]
    },
    'linear-programming': {
      name: 'Program Linear',
      description: 'Selesaikan masalah optimasi dengan fungsi tujuan dan daerah feasible.',
      definition: 'Program linear adalah metode untuk menentukan nilai optimum dari fungsi tujuan dengan kendala berbentuk pertidaksamaan linear.',
      formulas: [
        { label: 'Fungsi tujuan', value: 'Z = ax + by' },
        { label: 'Daerah feasible', value: 'Himpunan titik yang memenuhi semua kendala' },
        { label: 'Nilai optimum', value: 'Ditemukan pada titik sudut daerah feasible' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Kendala: x + y ≤ 8, x ≥ 0, y ≥ 0.',
            'Daerah feasible terletak di kuadran I dan di bawah garis x + y = 8.',
            'Titik sudutnya adalah (0,0), (8,0), dan (0,8).'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Jika Z = 3x + 4y, evaluasi titik sudutnya.',
            'Pada (0,8), Z = 32.',
            'Pada (8,0), Z = 24.',
            'Jadi nilai maksimumnya adalah 32.'
          ]
        }
      ]
    },
    functions: {
      name: 'Fungsi',
      description: 'Pelajari fungsi, domain, range, dan cara mengevaluasi nilai fungsi.',
      definition: 'Fungsi adalah hubungan khusus yang memasangkan setiap elemen domain dengan tepat satu elemen kodomain.',
      formulas: [
        { label: 'Notasi fungsi', value: 'f(x) = ax + b' },
        { label: 'Domain', value: 'Himpunan semua nilai input' },
        { label: 'Range', value: 'Himpunan semua nilai output' }
      ],
      examples: [
        { title: 'Contoh pengerjaan 1', steps: ['Diketahui f(x) = 3x + 2.', 'Maka f(4) = 3(4) + 2 = 14.', 'Jadi nilai fungsi pada x = 4 adalah 14.'] },
        { title: 'Contoh pengerjaan 2', steps: ['Pada f(x) = x + 3, semua x real bisa dipakai.', 'Rangenya juga semua bilangan real.', 'Jadi domain dan range adalah semua bilangan real.'] }
      ]
    },
    'social-arithmetic': {
      name: 'Aritmetika Sosial',
      description: 'Terapkan konsep matematika pada jual beli, diskon, pajak, dan keuntungan.',
      definition: 'Aritmetika sosial adalah penerapan operasi hitung pada kegiatan ekonomi seperti harga jual, harga beli, untung, rugi, diskon, dan pajak.',
      formulas: [
        { label: 'Untung', value: 'Untung = harga jual - harga beli' },
        { label: 'Rugi', value: 'Rugi = harga beli - harga jual' },
        { label: 'Persentase', value: 'Persentase = (bagian / total) × 100%' }
      ],
      examples: [
        { title: 'Contoh pengerjaan 1', steps: ['Harga awal Rp120.000 dan diskon 15%.', 'Diskon = 15% × 120.000 = 18.000.', 'Harga akhir = 120.000 - 18.000 = 102.000.'] },
        { title: 'Contoh pengerjaan 2', steps: ['Harga beli Rp80.000 dan harga jual Rp96.000.', 'Untung = 96.000 - 80.000 = 16.000.', 'Persentase untung = 16.000 / 80.000 × 100% = 20%.'] }
      ]
    },
    statistics: {
      name: 'Statistika',
      description: 'Mengorganisasi data, menghitung mean, median, modus, dan membaca tampilan data.',
      definition: 'Statistika adalah cabang matematika yang mempelajari cara mengumpulkan, menyajikan, menganalisis, dan menafsirkan data.',
      formulas: [
        { label: 'Mean', value: 'Mean = jumlah data / banyaknya data' },
        { label: 'Median', value: 'Median adalah nilai tengah dari data yang sudah diurutkan' },
        { label: 'Modus', value: 'Modus adalah nilai yang paling sering muncul' }
      ],
      examples: [
        { title: 'Contoh pengerjaan 1', steps: ['Data: 5, 6, 7, 8, 9.', 'Jumlah data = 35.', 'Banyak data = 5.', 'Mean = 35 / 5 = 7.'] },
        { title: 'Contoh pengerjaan 2', steps: ['Data: 2,3,3,4,5,3.', 'Angka 3 paling sering muncul.', 'Jadi modusnya adalah 3.'] }
      ]
    },
    probability: {
      name: 'Peluang',
      description: 'Hitung kemungkinan kejadian berdasarkan ruang sampel.',
      definition: 'Peluang adalah ukuran seberapa besar kemungkinan suatu kejadian terjadi dalam suatu percobaan.',
      formulas: [
        { label: 'Peluang', value: 'P(A) = banyak kejadian yang menguntungkan / total banyaknya kejadian' },
        { label: 'Peluang komplemen', value: 'P(A^c) = 1 - P(A)' }
      ],
      examples: [
        { title: 'Contoh pengerjaan 1', steps: ['Pada dadu, ruang sampel = {1,2,3,4,5,6}.', 'Bilangan genap = {2,4,6}.', 'Peluang bilangan genap = 3/6 = 1/2.'] },
        { title: 'Contoh pengerjaan 2', steps: ['Pada pelemparan koin, peluang muncul angka = 1/2.', 'Peluang tidak muncul angka = 1 - 1/2 = 1/2.'] }
      ]
    },
    'plane-figures': {
      name: 'Bangun Datar',
      description: 'Pelajari luas, keliling, dan sifat-sifat bangun datar.',
      definition: 'Bangun datar adalah bentuk dua dimensi yang memiliki luas dan keliling.',
      formulas: [
        { label: 'Luas persegi', value: 'L = s²' },
        { label: 'Luas segitiga', value: 'L = 1/2 × a × t' },
        { label: 'Keliling persegi panjang', value: 'K = 2(l + w)' }
      ],
      examples: [
        { title: 'Contoh pengerjaan 1', steps: ['Persegi panjang dengan panjang 8 cm dan lebar 5 cm.', 'Luas = 8 × 5 = 40 cm².', 'Keliling = 2(8 + 5) = 26 cm.'] },
        { title: 'Contoh pengerjaan 2', steps: ['Segitiga dengan alas 10 cm dan tinggi 6 cm.', 'Luas = 1/2 × 10 × 6 = 30 cm².'] }
      ]
    }
  }
};

const questionTranslations = {
  id: {
    'The values of a, b, and c in f(x) = 2x² - 5x + 3 are ...': 'Nilai a, b, dan c pada f(x) = 2x² - 5x + 3 adalah ...',
    'Given f(x) = 6 - x - x². The coefficients a and c are ...': 'Diketahui f(x) = 6 - x - x². Nilai koefisien a dan c adalah ...',
    'If f(x) = x(x - 4) + 5 is written in general form ax² + bx + c, then b is ...': 'Jika f(x) = x(x - 4) + 5 ditulis dalam bentuk umum ax² + bx + c, nilai b adalah ...',
    'For the function f(x) = 3x² + 8, the value of a + b + c is ...': 'Untuk fungsi f(x) = 3x² + 8, nilai a + b + c adalah ...',
    'If f(x) = -2x² + 4x - 1, then 2a - b + c is ...': 'Jika f(x) = -2x² + 4x - 1, nilai 2a - b + c adalah ...',
    'The general form of f(x) = (x - 3)² + 2 is ...': 'Bentuk umum dari f(x) = (x - 3)² + 2 adalah ...',
    'The value of f(3) for f(x) = x² - 2x + 5 is ...': 'Nilai f(3) untuk f(x) = x² - 2x + 5 adalah ...',
    'If f(x) = 2x² - kx + 1 and f(2) = 5, then k is ...': 'Jika f(x) = 2x² - kx + 1 dan f(2) = 5, nilai k adalah ...',
    'Given f(x) = ax² + 3x - 4. If f(-1) = -2, then a is ...': 'Diketahui f(x) = ax² + 3x - 4. Jika f(-1) = -2, nilai a adalah ...',
    'The image of x=-3 under f(x) = -x² + 4x + 2 is ...': 'Bayangan x = -3 oleh f(x) = -x² + 4x + 2 adalah ...',
    'The discriminant of x² - 6x + 9 = 0 is ...': 'Diskriminan dari x² - 6x + 9 = 0 adalah ...',
    'The discriminant of f(x) = 2x² - 3x - 2 is ...': 'Diskriminan dari f(x) = 2x² - 3x - 2 adalah ...',
    'If f(x)=x²+4x+c and D=0, then c is ...': 'Jika f(x) = x² + 4x + c dan D = 0, nilai c adalah ...',
    'The value of p so that f(x)=px²-4x+2 has discriminant 16 is ...': 'Nilai p agar f(x) = px² - 4x + 2 memiliki diskriminan 16 adalah ...',
    'The graph of f(x)=x²-2x+4 relative to the x-axis is ...': 'Grafik f(x) = x² - 2x + 4 terhadap sumbu-x adalah ...',
    'The sum of the roots x₁+x₂ of x²-7x+10=0 is ...': 'Jumlah akar x₁ + x₂ dari x² - 7x + 10 = 0 adalah ...',
    'The product of the roots of 2x²+5x-3=0 is ...': 'Hasil kali akar-akar 2x² + 5x - 3 = 0 adalah ...',
    'The type of roots of x²+3x+5=0 is ...': 'Jenis akar-akar x² + 3x + 5 = 0 adalah ...',
    'The value of m so that f(x)=x²-mx+9 is tangent to the x-axis is ...': 'Nilai m agar f(x) = x² - mx + 9 menyinggung sumbu-x adalah ...',
    'The condition for f(x)=3x²-6x+k not to intersect the x-axis is ...': 'Syarat agar f(x) = 3x² - 6x + k tidak memotong sumbu-x adalah ...',
    'The roots of x²-9=0 are ...': 'Akar-akar x² - 9 = 0 adalah ...',
    'The zero points of f(x)=x²-5x+6 are ...': 'Titik nol f(x) = x² - 5x + 6 adalah ...',
    'The roots of x²+7x+12=0 are ...': 'Akar-akar x² + 7x + 12 = 0 adalah ...',
    'The roots of x²-2x-8=0 are ...': 'Akar-akar x² - 2x - 8 = 0 adalah ...',
    'The values of x satisfying 2x²-7x+3=0 are ...': 'Nilai x yang memenuhi 2x² - 7x + 3 = 0 adalah ...',
    'If one root of x²+bx-12=0 is x=3, then b is ...': 'Jika salah satu akar x² + bx - 12 = 0 adalah x = 3, nilai b adalah ...',
    'The zero points of f(x)=3x²-12x are ...': 'Titik nol f(x) = 3x² - 12x adalah ...',
    'If the roots of x²-8x+15=0 are p and q, then p²+q² is ...': 'Jika akar-akar x² - 8x + 15 = 0 adalah p dan q, nilai p² + q² adalah ...',
    'The solution set of x²+6x+9=0 is ...': 'Himpunan penyelesaian x² + 6x + 9 = 0 adalah ...',
    'The x-intercepts of f(x)=x²-x-6 are ...': 'Titik potong f(x) = x² - x - 6 dengan sumbu-x adalah ...',
    'The axis of symmetry of f(x)=x²-6x+8 is ...': 'Sumbu simetri f(x) = x² - 6x + 8 adalah ...',
    'The axis of symmetry of f(x)=-2x²+8x-5 is ...': 'Sumbu simetri f(x) = -2x² + 8x - 5 adalah ...',
    'The vertex coordinates of f(x)=x²-4x+3 are ...': 'Koordinat titik puncak f(x) = x² - 4x + 3 adalah ...',
    'The minimum value of f(x)=x²+2x-8 is ...': 'Nilai minimum f(x) = x² + 2x - 8 adalah ...',
    'The turning point of f(x)=-x²+6x-5 is ...': 'Titik puncak f(x) = -x² + 6x - 5 adalah ...',
    'If the vertex of f(x)=x²-bx+5 is at x=3, then b is ...': 'Jika titik puncak f(x) = x² - bx + 5 berada pada x = 3, nilai b adalah ...',
    'The vertex coordinates of f(x)=2x²+4x+1 are ...': 'Koordinat titik puncak f(x) = 2x² + 4x + 1 adalah ...',
    'If the graph ax²+12x+9 has axis of symmetry x=3, then a is ...': 'Jika grafik ax² + 12x + 9 memiliki sumbu simetri x = 3, nilai a adalah ...',
    'The minimum value of f(x)=3x²-12x+7 is ...': 'Nilai minimum f(x) = 3x² - 12x + 7 adalah ...',
    'The maximum turning point of f(x)=-2x²-8x+3 is ...': 'Titik puncak maksimum f(x) = -2x² - 8x + 3 adalah ...',
    'The direction of opening for f(x)=-x²+3x-2 is ...': 'Arah terbuka grafik f(x) = -x² + 3x - 2 adalah ...',
    'The y-intercept of f(x)=x²-4x-5 is ...': 'Titik potong f(x) = x² - 4x - 5 dengan sumbu-y adalah ...',
    'The parabola 2x²+bx+c intersects the y-axis at (0,4). Then c is ...': 'Parabola 2x² + bx + c memotong sumbu-y di (0,4). Nilai c adalah ...',
    'The y-intercept of f(x)=3x²+5x-2 is ...': 'Titik potong f(x) = 3x² + 5x - 2 dengan sumbu-y adalah ...',
    'If a>0 and D>0, the graph is ...': 'Jika a > 0 dan D > 0, grafiknya ...',
    'If a<0 and D<0, the graph is ...': 'Jika a < 0 dan D < 0, grafiknya ...',
    'The property of f(x)=(x-1)²-4 is ...': 'Sifat grafik f(x) = (x - 1)² - 4 adalah ...',
    'A function with vertex (2,-1) and passing through (0,3) is ...': 'Fungsi yang memiliki titik puncak (2,-1) dan melalui (0,3) adalah ...',
    'A function crossing the x-axis at (1,0) and (3,0) and passing through (0,3) is ...': 'Fungsi yang memotong sumbu-x di (1,0) dan (3,0), serta melalui (0,3), adalah ...',
    'The maximum height of h(t)=40t-5t² is ...': 'Tinggi maksimum h(t) = 40t - 5t² adalah ...',
    'The feasible region for x ≥ 0 and y ≥ 0 is ...': 'Daerah penyelesaian untuk x ≥ 0 dan y ≥ 0 adalah ...',
    'For the objective function Z = 2x + 3y, the value of Z at (1,2) is ...': 'Untuk fungsi tujuan Z = 2x + 3y, nilai Z di titik (1,2) adalah ...',
    'If Z = 4x + 5y, and the corner points are (0,6), (3,0), and (2,2), the maximum value of Z is ...': 'Jika Z = 4x + 5y dan titik sudutnya (0,6), (3,0), dan (2,2), nilai maksimum Z adalah ...',
    'The constraints x + y ≤ 10, x ≥ 0, y ≥ 0. The possible corner points are ...': 'Kendala x + y ≤ 10, x ≥ 0, dan y ≥ 0. Titik sudut yang mungkin adalah ...',
    'Given the objective function Z = 5x + 4y with constraints x + y ≤ 8, x ≥ 0, y ≥ 0, x ≤ 5. The maximum value of Z occurs at ...': 'Diketahui fungsi tujuan Z = 5x + 4y dengan kendala x + y ≤ 8, x ≥ 0, y ≥ 0, dan x ≤ 5. Nilai maksimum Z terjadi di titik ...',
    'The feasible region of the system x + y ≤ 6, x ≥ 1, y ≥ 2. Its corner points are ...': 'Daerah penyelesaian sistem x + y ≤ 6, x ≥ 1, dan y ≥ 2 memiliki titik sudut ...',
    'If f(x) = 2x + 1, then f(3) = ...': 'Jika f(x) = 2x + 1, maka f(3) = ...',
    'A relation is called a function if ...': 'Suatu relasi disebut fungsi jika ...',
    'Given f(x) = x² - 3x + 2. The value of f(2) is ...': 'Diketahui f(x) = x² - 3x + 2. Nilai f(2) adalah ...',
    'If f(x) = 5x - 4 and f(a) = 11, then a = ...': 'Jika f(x) = 5x - 4 dan f(a) = 11, maka a = ...',
    'Given f(x) = 3x + 2 and g(x) = x² - 1. The value of (g o f)(1) is ...': 'Diketahui f(x) = 3x + 2 dan g(x) = x² - 1. Nilai (g o f)(1) adalah ...',
    'If f(x) = 2x + 1 and f(a) = 9, then a² + 1 is ...': 'Jika f(x) = 2x + 1 dan f(a) = 9, nilai a² + 1 adalah ...',
    'If the buying price is Rp50,000 and the selling price is Rp60,000, then the profit is ...': 'Jika harga beli Rp50.000 dan harga jual Rp60.000, keuntungan yang diperoleh adalah ...',
    'A 20% discount on Rp100,000 is ...': 'Diskon 20% dari Rp100.000 adalah ...',
    'A merchant buys an item for Rp160,000 and sells it with a 25% profit. The selling price is ...': 'Pedagang membeli barang seharga Rp160.000 dan menjualnya dengan keuntungan 25%. Harga jualnya adalah ...',
    'A bag is sold for Rp240,000 after a 20% discount. The original price was ...': 'Sebuah tas dijual seharga Rp240.000 setelah diskon 20%. Harga awal tas tersebut adalah ...',
    'A shop gives a 10% discount and then 5%. If the original price is Rp200,000, what is the final price?': 'Sebuah toko memberi diskon 10% lalu 5%. Jika harga awal Rp200.000, berapa harga akhirnya?',
    'The buying price of an item is Rp150,000. If you want a 30% profit based on cost, what selling price should be set?': 'Harga beli sebuah barang Rp150.000. Jika ingin mendapat untung 30% dari harga beli, berapa harga jual yang harus ditetapkan?',
    'The mean of the data 4,5,6,7,8 is ...': 'Rata-rata data 4, 5, 6, 7, 8 adalah ...',
    'The mode of the data 3,4,4,5,6 is ...': 'Modus dari data 3, 4, 4, 5, 6 adalah ...',
    'The median of the data 1,3,4,5,7,8,9 is ...': 'Median dari data 1, 3, 4, 5, 7, 8, 9 adalah ...',
    'Data 2,3,5,5,5,7. The mode is ...': 'Data 2, 3, 5, 5, 5, 7. Modusnya adalah ...',
    'The median of the data 5,7,8,10,12,14,16,18 is ...': 'Median dari data 5, 7, 8, 10, 12, 14, 16, 18 adalah ...',
    'The mean of the data 2,4,6,8,10,12 is ...': 'Rata-rata data 2, 4, 6, 8, 10, 12 adalah ...',
    'The probability of rolling a 5 on a die is ...': 'Peluang muncul angka 5 saat melempar dadu adalah ...',
    'When tossing a coin, the probability of heads is ...': 'Saat melempar koin, peluang muncul sisi angka adalah ...',
    'A bag contains 3 red balls and 2 blue balls. The probability of drawing a red ball is ...': 'Sebuah kantong berisi 3 bola merah dan 2 bola biru. Peluang mengambil bola merah adalah ...',
    'If the probability of rain today is 0.7, then the probability of no rain is ...': 'Jika peluang hujan hari ini adalah 0,7, peluang tidak hujan adalah ...',
    'Two coins are tossed together. The probability of getting exactly one head is ...': 'Dua koin dilempar bersamaan. Peluang muncul tepat satu sisi angka adalah ...',
    'A box contains 4 red balls, 3 blue balls, and 3 green balls. The probability of drawing a ball that is not blue is ...': 'Sebuah kotak berisi 4 bola merah, 3 bola biru, dan 3 bola hijau. Peluang mengambil bola yang bukan biru adalah ...',
    'The area of a square with side 7 cm is ...': 'Luas persegi dengan sisi 7 cm adalah ...',
    'The perimeter of a rectangle 6 cm × 4 cm is ...': 'Keliling persegi panjang berukuran 6 cm × 4 cm adalah ...',
    'The area of a triangle with base 12 cm and height 8 cm is ...': 'Luas segitiga dengan alas 12 cm dan tinggi 8 cm adalah ...',
    'A parallelogram has base 10 cm and height 6 cm. Its area is ...': 'Jajar genjang memiliki alas 10 cm dan tinggi 6 cm. Luasnya adalah ...',
    'The combined area of a rectangle 8 × 5 and a triangle with base 8 and height 6 is ...': 'Jumlah luas persegi panjang berukuran 8 × 5 dan segitiga dengan alas 8 serta tinggi 6 adalah ...',
    'The perimeter of a rectangle is 30 cm. If the length is 9 cm, what is the width?': 'Keliling persegi panjang adalah 30 cm. Jika panjangnya 9 cm, berapa lebarnya?',
    'Quadrant I': 'Kuadran I', 'Quadrant II': 'Kuadran II', 'Quadrant III': 'Kuadran III', 'Quadrant IV': 'Kuadran IV',
    'Cuts two points': 'Memotong di dua titik', 'Tangential': 'Menyentuh di satu titik', 'Does not cut': 'Tidak memotong sumbu-x', 'Cuts three points': 'Memotong di tiga titik',
    'Real and distinct': 'Real dan berbeda', 'Real repeated': 'Real kembar', 'Rational': 'Rasional', 'Imaginary/non-real': 'Imajiner/tidak real',
    'x=3 only': 'hanya x = 3', 'x=-3 or x=3': 'x = -3 atau x = 3', 'x=9 or x=-9': 'x = 9 atau x = -9', 'x=0': 'x = 0',
    'x=-2 or -3': 'x = -2 atau -3', 'x=2 or 3': 'x = 2 atau 3', 'x=1 or 6': 'x = 1 atau 6', 'x=-1 or -6': 'x = -1 atau -6',
    '3 and 4': '3 dan 4', '-3 and -4': '-3 dan -4', '-2 and -6': '-2 dan -6', '2 and 6': '2 dan 6',
    'x=0 and x=4': 'x = 0 dan x = 4', 'x=0 and x=-4': 'x = 0 dan x = -4', 'x=3 and x=12': 'x = 3 dan x = 12', 'x=4 only': 'hanya x = 4',
    '{-3,3}': '{-3, 3}', '{-3}': '{-3}', '{3}': '{3}', '{-9,1}': '{-9, 1}',
    '(3,0) and (-2,0)': '(3, 0) dan (-2, 0)', '(-3,0) and (2,0)': '(-3, 0) dan (2, 0)', '(6,0) and (-1,0)': '(6, 0) dan (-1, 0)', '(0,-6)': '(0, -6)',
    'Upward': 'Terbuka ke atas', 'Downward': 'Terbuka ke bawah', 'Right': 'Ke kanan', 'Left': 'Ke kiri',
    'Opens downward': 'Terbuka ke bawah', 'Opens upward and cuts two points': 'Terbuka ke atas dan memotong sumbu-x di dua titik', 'Opens upward and tangent': 'Terbuka ke atas dan menyinggung sumbu-x', 'Opens downward and tangent': 'Terbuka ke bawah dan menyinggung sumbu-x',
    'Entirely above': 'Seluruhnya di atas sumbu-x', 'Entirely below': 'Seluruhnya di bawah sumbu-x', 'Tangent from below': 'Menyentuh sumbu-x dari bawah', 'Cuts two points': 'Memotong di dua titik',
    'Opens downward, vertex (1,-4)': 'Terbuka ke bawah, titik puncak (1,-4)', 'Opens upward, vertex (1,-4)': 'Terbuka ke atas, titik puncak (1,-4)', 'Opens upward, vertex (-1,4)': 'Terbuka ke atas, titik puncak (-1,4)', 'Opens downward, vertex (-1,-4)': 'Terbuka ke bawah, titik puncak (-1,-4)',
    '40 meters': '40 meter', '80 meters': '80 meter', '100 meters': '100 meter', '160 meters': '160 meter',
    'each domain element is paired with one codomain element': 'setiap anggota domain dipasangkan dengan tepat satu anggota kodomain',
    'all codomain elements are equal': 'semua anggota kodomain bernilai sama',
    'each domain element has two pairs': 'setiap anggota domain memiliki dua pasangan',
    'codomain elements are more numerous than domain elements': 'jumlah anggota kodomain lebih banyak daripada domain',
    'Evaluate the corner points': 'Uji nilai di titik-titik sudut', 'Use the objective function': 'Gunakan fungsi tujuan', 'Compare the results': 'Bandingkan hasilnya',
    'Find the x and y boundaries': 'Tentukan batas x dan y', 'Calculate the intersection points': 'Hitung titik-titik perpotongan', 'Choose the corner points that satisfy all constraints': 'Pilih titik sudut yang memenuhi semua kendala',
    'Calculate f(1) first': 'Hitung f(1) terlebih dahulu', 'Substitute the result into g(x)': 'Substitusikan hasilnya ke g(x)', 'Solve the operation': 'Selesaikan operasinya',
    'Find a from the equation f(a)=9': 'Tentukan a dari persamaan f(a) = 9', 'Continue by calculating a² + 1': 'Lanjutkan dengan menghitung a² + 1',
    'Calculate the first discount': 'Hitung diskon pertama', 'Find the price after the first discount': 'Tentukan harga setelah diskon pertama', 'Continue with the second discount': 'Lanjutkan dengan diskon kedua',
    'Calculate the profit': 'Hitung keuntungannya', 'Add it to the buying price': 'Tambahkan ke harga beli', 'Write the final answer': 'Tuliskan jawaban akhir',
    'Data is already ordered': 'Data sudah berurutan', 'Because there are 8 data points, take the two middle values': 'Karena ada 8 data, ambil dua nilai yang berada di tengah', 'Calculate their average': 'Hitung rata-ratanya',
    'Add all the numbers': 'Jumlahkan semua bilangan', 'Divide by the number of data points': 'Bagi dengan banyaknya data', 'Simplify the result': 'Sederhanakan hasilnya',
    'Write all possible outcomes': 'Tuliskan semua kemungkinan hasil', 'Count the outcomes with exactly one head': 'Hitung hasil yang menunjukkan tepat satu sisi angka', 'Divide by the total outcomes': 'Bagi dengan jumlah seluruh hasil',
    'Count the total number of balls': 'Hitung jumlah seluruh bola', 'Count the balls that are not blue': 'Hitung bola yang bukan biru', 'Compare the results': 'Bandingkan hasilnya',
    'Calculate the rectangle area': 'Hitung luas persegi panjang', 'Calculate the triangle area': 'Hitung luas segitiga', 'Add them together': 'Jumlahkan keduanya',
    'Use the perimeter formula': 'Gunakan rumus keliling', 'Check the equation': 'Periksa persamaannya', 'Solve for the width': 'Tentukan lebar persegi panjang',
    'Rp5,000': 'Rp5.000', 'Rp10,000': 'Rp10.000', 'Rp15,000': 'Rp15.000', 'Rp20,000': 'Rp20.000', 'Rp25,000': 'Rp25.000',
    'Rp180,000': 'Rp180.000', 'Rp190,000': 'Rp190.000', 'Rp200,000': 'Rp200.000', 'Rp210,000': 'Rp210.000',
    'Rp260,000': 'Rp260.000', 'Rp280,000': 'Rp280.000', 'Rp300,000': 'Rp300.000', 'Rp320,000': 'Rp320.000',
    'Rp171,000': 'Rp171.000', 'Rp171,500': 'Rp171.500', 'Rp185,000': 'Rp185.000', 'Rp195,000': 'Rp195.000',
    '0.3': '0,3', '0.7': '0,7', '0.5': '0,5',
    'm=6 or m=-6': 'm = 6 atau m = -6', '4 and -2': '4 dan -2', '-4 and 2': '-4 dan 2', '8 and -1': '8 dan -1', '-8 and 1': '-8 dan 1',
    'In general form ax² + bx + c, a=2, b=-5, c=3.': 'Dalam bentuk umum ax² + bx + c, a = 2, b = -5, dan c = 3.',
    'Rewrite as -x² - x + 6, so a=-1 and c=6.': 'Ubah menjadi -x² - x + 6, sehingga a = -1 dan c = 6.',
    'Expand to x² - 4x + 5, so b=-4.': 'Uraikan menjadi x² - 4x + 5, sehingga b = -4.',
    'Here a=3, b=0, c=8, so a+b+c=11.': 'Diketahui a = 3, b = 0, dan c = 8, sehingga a + b + c = 11.',
    'Substitute a=-2, b=4, c=-1: -4-4-1=-9.': 'Substitusikan a = -2, b = 4, dan c = -1: -4 - 4 - 1 = -9.',
    '8-2k+1=5, so 2k=4 and k=2.': '8 - 2k + 1 = 5, sehingga 2k = 4 dan k = 2.',
    'a-3-4=-2, so a=5.': 'a - 3 - 4 = -2, sehingga a = 5.',
    'D=b²-4ac=36-36=0.': 'D = b² - 4ac = 36 - 36 = 0.',
    'D=(-3)²-4(2)(-2)=9+16=25.': 'D = (-3)² - 4(2)(-2) = 9 + 16 = 25.',
    '16-4c=0, so c=4.': '16 - 4c = 0, sehingga c = 4.',
    '16-8p=16, so p=0.': '16 - 8p = 16, sehingga p = 0.',
    'D=4-16=-12<0, so it does not cut the x-axis.': 'D = 4 - 16 = -12 < 0, sehingga grafik tidak memotong sumbu-x.',
    'Sum of roots = -b/a = 7.': 'Jumlah akar = -b/a = 7.',
    'Product = c/a = -3/2.': 'Hasil kali akar = c/a = -3/2.',
    'D=9-20=-11<0, so the roots are non-real.': 'D = 9 - 20 = -11 < 0, sehingga akar-akarnya tidak real.',
    'D=m²-36=0, so m=±6.': 'D = m² - 36 = 0, sehingga m = ±6.',
    'D=36-12k<0, so k>3.': 'D = 36 - 12k < 0, sehingga k > 3.',
    'Factor as (x+3)(x+4), so roots are -3 and -4.': 'Faktorkan menjadi (x + 3)(x + 4), sehingga akar-akarnya -3 dan -4.',
    'Factor as (x-4)(x+2).': 'Faktorkan menjadi (x - 4)(x + 2).',
    'Factor as (2x-1)(x-3), so x=1/2 or 3.': 'Faktorkan menjadi (2x - 1)(x - 3), sehingga x = 1/2 atau 3.',
    '9+3b-12=0, so b=1.': '9 + 3b - 12 = 0, sehingga b = 1.',
    '3x(x-4)=0, giving x=0 or 4.': '3x(x - 4) = 0, sehingga x = 0 atau 4.',
    '(x+3)²=0, so the set is {-3}.': '(x + 3)² = 0, sehingga himpunan penyelesaiannya adalah {-3}.',
    'x=-b/(2a)=6/2=3.': 'x = -b/(2a) = 6/2 = 3.',
    'x=-8/(-4)=2.': 'x = -8/(-4) = 2.',
    'x=2 and f(2)=-1, so (2,-1).': 'x = 2 dan f(2) = -1, sehingga titik puncaknya (2, -1).',
    'The vertex is at x=-1 and f(-1)=-9.': 'Titik puncak berada pada x = -1 dan f(-1) = -9.',
    'x=3 and f(3)=4.': 'x = 3 dan f(3) = 4.',
    'x=-1 and f(-1)=-1.': 'x = -1 dan f(-1) = -1.',
    'x=2 and f(2)=-5.': 'x = 2 dan f(2) = -5.',
    'x=-2 and f(-2)=11.': 'x = -2 dan f(-2) = 11.',
    'b/(2)=3, so b=6.': 'b/2 = 3, sehingga b = 6.',
    '-12/(2a)=3, so a=-2.': '-12/(2a) = 3, sehingga a = -2.',
    'a=-1<0, so the parabola opens downward.': 'a = -1 < 0, sehingga parabola terbuka ke bawah.',
    'The y-intercept is found at x=0, which gives (0,-5).': 'Titik potong sumbu-y diperoleh saat x = 0, yaitu (0, -5).',
    'When x=0, f(0)=c=4.': 'Saat x = 0, f(0) = c = 4.',
    'At x=0, y=-2.': 'Saat x = 0, y = -2.',
    'a>0 means opening upward and D>0 means two intersections.': 'a > 0 berarti grafik terbuka ke atas dan D > 0 berarti ada dua titik potong.',
    'a<0 and no real roots means the graph is entirely below the x-axis.': 'a < 0 dan tidak memiliki akar real berarti grafik seluruhnya berada di bawah sumbu-x.',
    'The vertex form shows the vertex (1,-4) and a=1.': 'Bentuk puncak menunjukkan titik puncak (1, -4) dan a = 1.',
    'The form (x-2)²-1 = x²-4x+3.': 'Bentuknya (x - 2)² - 1 = x² - 4x + 3.',
    'Roots 1 and 3 give (x-1)(x-3)=x²-4x+3.': 'Akar 1 dan 3 menghasilkan (x - 1)(x - 3) = x² - 4x + 3.',
    'The vertex is at t=4, so h(4)=160-80=80 meters.': 'Titik puncak berada pada t = 4, sehingga h(4) = 160 - 80 = 80 meter.',
    'x ≥ 0 and y ≥ 0 show the region in Quadrant I.': 'x ≥ 0 dan y ≥ 0 menunjukkan daerah di Kuadran I.',
    'Z(0,6)=30, Z(3,0)=12, Z(2,2)=18. So the maximum is 30.': 'Z(0,6) = 30, Z(3,0) = 12, Z(2,2) = 18. Jadi nilai maksimumnya 30.',
    'The corner points are (0,0), (10,0), and (0,10).': 'Titik sudutnya adalah (0,0), (10,0), dan (0,10).',
    'At (5,3), Z = 5(5) + 4(3) = 37, which is the maximum.': 'Di titik (5,3), Z = 5(5) + 4(3) = 37, yaitu nilai maksimum.',
    'With x ≥ 1, y ≥ 2, x + y ≤ 6, the corner points are (1,2), (1,5), and (4,2).': 'Dengan x ≥ 1, y ≥ 2, dan x + y ≤ 6, titik sudutnya adalah (1,2), (1,5), dan (4,2).',
    'f(3) = 2(3) + 1 = 7.': 'f(3) = 2(3) + 1 = 7.',
    'A function pairs each domain element with exactly one codomain element.': 'Fungsi memasangkan setiap anggota domain dengan tepat satu anggota kodomain.',
    '5a - 4 = 11 → 5a = 15 → a = 3.': '5a - 4 = 11 → 5a = 15 → a = 3.',
    'f(1)=5, then g(5)=25-1=24.': 'f(1) = 5, lalu g(5) = 25 - 1 = 24.',
    '2a + 1 = 9 → a = 4, so a² + 1 = 17.': '2a + 1 = 9 → a = 4, sehingga a² + 1 = 17.',
    'Profit = 60,000 - 50,000 = 10,000.': 'Untung = 60.000 - 50.000 = 10.000.',
    '20% × 100,000 = 20,000.': '20% × 100.000 = 20.000.',
    'Profit = 25% × 160,000 = 40,000, so selling price = 200,000.': 'Untung = 25% × 160.000 = 40.000, sehingga harga jual = 200.000.',
    'Final price = 80% × original price, so original price = 240,000 / 0.8 = 300,000.': 'Harga akhir = 80% × harga awal, sehingga harga awal = 240.000 / 0,8 = 300.000.',
    'Price after 10% discount = 180,000. 5% of 180,000 = 9,000, so final price = 171,000.': 'Harga setelah diskon 10% = 180.000. Diskon 5% dari 180.000 = 9.000, sehingga harga akhir = 171.000.',
    'Profit = 30% × 150,000 = 45,000, so selling price = 195,000.': 'Untung = 30% × 150.000 = 45.000, sehingga harga jual = 195.000.',
    'Total data = 30, number of data = 5, so mean = 6.': 'Jumlah data = 30, banyak data = 5, sehingga rata-rata = 6.',
    'The number 4 appears most often, so the mode is 4.': 'Angka 4 paling sering muncul, sehingga modusnya adalah 4.',
    'The data are ordered and the middle value is 5.': 'Data sudah diurutkan dan nilai tengahnya adalah 5.',
    'The number 5 appears most often.': 'Angka 5 paling sering muncul.',
    'Median = average of the 4th and 5th data values = (10 + 12) / 2 = 11.': 'Median = rata-rata data ke-4 dan ke-5 = (10 + 12) / 2 = 11.',
    'Total = 42, number = 6, so mean = 7.': 'Jumlah = 42, banyak data = 6, sehingga rata-rata = 7.',
    'A six-sided die has one face showing 5, so the probability is 1/6.': 'Dadu memiliki enam sisi dan hanya satu sisi bernilai 5, sehingga peluangnya 1/6.',
    'A coin has two sides with equal chance of appearing.': 'Koin memiliki dua sisi dengan peluang kemunculan yang sama.',
    'Total balls = 5, so probability of red = 3/5.': 'Jumlah bola = 5, sehingga peluang mengambil bola merah = 3/5.',
    'Probability of no rain = 1 - 0.7 = 0.3.': 'Peluang tidak hujan = 1 - 0,7 = 0,3.',
    'Possible outcomes are GG, GA, AG, AA. Only GA and AG have exactly one head, so probability = 2/4 = 1/2.': 'Kemungkinan hasilnya GG, GA, AG, AA. Hanya GA dan AG yang menunjukkan tepat satu sisi angka, sehingga peluangnya = 2/4 = 1/2.',
    'Total balls = 10; non-blue balls = 4 + 3 = 7, so probability = 7/10.': 'Jumlah bola = 10; bola yang bukan biru = 4 + 3 = 7, sehingga peluangnya = 7/10.',
    'A = s² = 7² = 49 cm².': 'L = s² = 7² = 49 cm².',
    'P = 2(6 + 4) = 20 cm.': 'K = 2(6 + 4) = 20 cm.',
    'A = 1/2 × 12 × 8 = 48 cm².': 'L = 1/2 × 12 × 8 = 48 cm².',
    'A = base × height = 10 × 6 = 60 cm².': 'L = alas × tinggi = 10 × 6 = 60 cm².',
    'Rectangle area = 40 and triangle area = 24, total = 64 cm².': 'Luas persegi panjang = 40 dan luas segitiga = 24, jumlahnya = 64 cm².',
    '2(l + w)=30 → l + w = 15 → 9 + w = 15 → w = 6 cm.': '2(p + l) = 30 → p + l = 15 → 9 + l = 15 → l = 6 cm.'
  }
};

const STORAGE_KEY = 'edulearn-progress-v1';
const REVIEW_BOOKMARKS_KEY = 'edulearn-review-bookmarks-v1';

function getLocalizedMaterialData() {
  const selectedLanguage = getSettings().language;
  const translations = selectedLanguage === 'id' ? materialTranslations.id : {};

  const localizeTopic = (topic) => {
    const translated = translations[topic.id] || {};
    return {
      ...topic,
      name: translated.name || topic.name,
      description: translated.description || topic.description,
      definition: translated.definition || topic.definition,
      formulas: (translated.formulas || topic.formulas).map((formula, index) => ({
        ...topic.formulas[index],
        ...formula
      })),
      examples: (translated.examples || topic.examples).map((example, index) => ({
        ...topic.examples[index],
        ...example,
        steps: example.steps || topic.examples[index].steps
      }))
    };
  };

  return {
    PK: materialData.PK.map(localizeTopic),
    PM: materialData.PM.map(localizeTopic)
  };
}

const getAllTopics = () => {
  const localized = getLocalizedMaterialData();
  return [...localized.PK, ...localized.PM];
};
const urlParams = new URLSearchParams(window.location.search);
const initialTopicId = urlParams.get('topic');

const state = {
  subject: 'PK',
  selectedTopicId: initialTopicId && getAllTopics().some((topic) => topic.id === initialTopicId)
    ? initialTopicId
    : materialData.PK[0].id,
  difficulty: 'mudah',
  minutes: 10,
  questionCount: 10,
  untimedMode: false,
  quiz: null,
  progress: loadProgress()
};

const elements = {
  topicGrid: document.getElementById('topicGrid'),
  topicDetail: document.getElementById('topicDetail'),
  topicSelect: document.getElementById('topicSelect'),
  timerMinutes: document.getElementById('timerMinutes'),
  quizArea: document.getElementById('quizArea'),
  resultsArea: document.getElementById('resultsArea'),
  progressOverview: document.getElementById('progressOverview'),
  overviewPercent: document.getElementById('overviewPercent'),
  currentYear: document.getElementById('current-year')
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved || { byTopic: {}, examHistory: [] };
  } catch {
    return { byTopic: {}, examHistory: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getTopicById(topicId) {
  return getAllTopics().find((topic) => topic.id === topicId);
}

function localizeQuestion(question) {
  const translations = getSettings().language === 'id' ? questionTranslations.id : {};
  return {
    ...question,
    topicName: getTopicById(question.topicId)?.name || question.topicName,
    prompt: translations[question.prompt] || question.prompt,
    options: question.options.map((option) => translations[option] || option),
    subPoints: question.subPoints?.map((point) => translations[point] || point),
    explanation: translations[question.explanation] || question.explanation
  };
}

function renderSubjectTabs() {
  document.querySelectorAll('.subject-tab').forEach((button) => {
    button.classList.toggle('active', button.dataset.subject === state.subject);
  });
}

function getTopicStats(topicId) {
  return state.progress.byTopic[topicId] || { attempts: 0, correct: 0, wrong: 0, totalSeconds: 0 };
}

function renderTopicCards() {
  if (!elements.topicGrid) return;

  const topics = getLocalizedMaterialData()[state.subject];

  elements.topicGrid.innerHTML = topics.map((topic) => {
    const stats = getTopicStats(topic.id);
    const accuracy = stats.attempts ? Math.round((stats.correct / Math.max(stats.correct + stats.wrong, 1)) * 100) : 0;

    return `
      <button class="topic-card ${topic.id === state.selectedTopicId ? 'active' : ''}" data-topic-id="${topic.id}" type="button">
        <div class="topic-head">
          <h3>${topic.name}</h3>
          <span class="topic-tag">${state.subject}</span>
        </div>
        <p>${topic.description}</p>
        <div class="topic-meta">
          <span>${t('common.practice')}: ${stats.attempts}</span>
          <span>${t('common.accuracy')}: ${accuracy}%</span>
        </div>
      </button>
    `;
  }).join('');

  elements.topicGrid.querySelectorAll('.topic-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.selectedTopicId = card.dataset.topicId;
      renderTopicCards();
      renderTopicDetail();
      renderTopicSelect();
    });
  });
}

function renderTopicDetail() {
  if (!elements.topicDetail) return;

  const topic = getTopicById(state.selectedTopicId);

  elements.topicDetail.innerHTML = `
    <h2>${topic.name}</h2>
    <p class="detail-subtitle">${topic.description}</p>

    <div class="detail-section">
      <h3>${t('common.materialDefinition')}</h3>
      <p>${topic.definition}</p>
    </div>

    <div class="detail-section">
      <h3>${t('common.keyFormulas')}</h3>
      <div class="formula-grid">
        ${topic.formulas.map((formula) => `
          <div class="formula-card">
            <h4>${formula.label}</h4>
            <p>${formula.value}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-section">
      <h3>${t('common.workedExamples')}</h3>
      <div class="example-grid">
        ${topic.examples.map((example) => `
          <div class="example-card">
            <h4>${example.title}</h4>
            <ul>
              ${example.steps.map((step) => `<li>${step}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-actions">
      <button class="btn btn-primary" type="button" data-start-topic="${topic.id}">${t('common.subtestPractice')}</button>
      <button class="btn btn-secondary" type="button" data-scroll-latihan="true">${t('common.chooseSubtest')}</button>
    </div>
  `;

  const startButton = elements.topicDetail.querySelector('[data-start-topic]');
  const scrollButton = elements.topicDetail.querySelector('[data-scroll-latihan]');

  startButton?.addEventListener('click', () => showAppView('#latihan'));

  scrollButton?.addEventListener('click', () => {
    showAppView('#latihan');
  });
}

function renderTopicSelect() {
  if (!elements.topicSelect) return;

  const localizedData = getLocalizedMaterialData();
  const topicOptions = Object.entries(localizedData).map(([subject, topics]) => `
    <optgroup label="${subject} material">
      ${topics.map((topic) => `<option value="${topic.id}">${topic.name}</option>`).join('')}
    </optgroup>
  `).join('');

  elements.topicSelect.innerHTML = topicOptions;
  elements.topicSelect.value = state.selectedTopicId;
}

function setDifficultyButtons() {
  document.querySelectorAll('.difficulty-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.difficulty === state.difficulty);
    const langKey = {
      mudah: 'practice.easy',
      sedang: 'practice.medium',
      susah: 'practice.hard'
    }[button.dataset.difficulty] || button.dataset.difficulty;
    button.textContent = t(langKey, button.textContent);
  });
}

function bindEvents() {
  document.querySelectorAll('.subject-tab').forEach((button) => {
    button.addEventListener('click', () => {
      state.subject = button.dataset.subject;
      state.selectedTopicId = getLocalizedMaterialData()[state.subject][0].id;
      renderSubjectTabs();
      renderTopicCards();
      renderTopicDetail();
      renderTopicSelect();
    });
  });

  document.querySelectorAll('.difficulty-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.difficulty = button.dataset.difficulty;
      setDifficultyButtons();
    });
  });

  const increaseTimeBtn = document.getElementById('increaseTime');
  const decreaseTimeBtn = document.getElementById('decreaseTime');
  const untimedCheckbox = document.getElementById('untimedMode');
  const questionCountInput = document.getElementById('questionCount');

  increaseTimeBtn?.addEventListener('click', () => {
    const nextValue = Math.min(60, Number(elements.timerMinutes.value) + 1);
    state.minutes = nextValue;
    elements.timerMinutes.value = nextValue;
  });

  decreaseTimeBtn?.addEventListener('click', () => {
    const nextValue = Math.max(1, Number(elements.timerMinutes.value) - 1);
    state.minutes = nextValue;
    elements.timerMinutes.value = nextValue;
  });

  elements.timerMinutes?.addEventListener('input', (event) => {
    const val = Math.max(1, Math.min(60, Number(event.target.value)));
    state.minutes = val;
    elements.timerMinutes.value = val;
  });

  questionCountInput?.addEventListener('input', (event) => {
    const value = Math.max(5, Math.min(50, Number(event.target.value) || 5));
    state.questionCount = value;
    questionCountInput.value = value;
  });

  untimedCheckbox?.addEventListener('change', (event) => {
    state.untimedMode = event.target.checked;
    if (elements.timerMinutes) {
      elements.timerMinutes.disabled = state.untimedMode;
    }
    increaseTimeBtn.disabled = state.untimedMode;
    decreaseTimeBtn.disabled = state.untimedMode;
  });

  elements.topicSelect?.addEventListener('change', (event) => {
    state.selectedTopicId = event.target.value;
    renderTopicCards();
    renderTopicDetail();
  });

  document.getElementById('startSubtest')?.addEventListener('click', () => startQuiz('subtest'));
  document.getElementById('startExam')?.addEventListener('click', () => startQuiz('exam'));

  const menuToggle = document.querySelector('.menu-toggle');
  const topbar = document.querySelector('.topbar');
  menuToggle?.addEventListener('click', () => {
    topbar.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => topbar.classList.remove('nav-open'));
  });
}

function buildQuestions(mode) {
  const selectedTopic = getTopicById(state.selectedTopicId);
  const questions = [];

  const addTopicQuestions = (topic) => {
    if (topic.questionPool) {
      topic.questionPool.forEach(([prompt, options, answer, explanation]) => {
        questions.push({ prompt, options, answer, explanation, topicId: topic.id, topicName: topic.name });
      });
      return;
    }

    const topicQuestions = topic.questions[state.difficulty] || [];
    topicQuestions.forEach((question) => {
      questions.push({ ...question, topicId: topic.id, topicName: topic.name });
    });
  };

  if (mode === 'subtest') {
    addTopicQuestions(selectedTopic);
  } else {
    getAllTopics().forEach((topic) => addTopicQuestions(topic));
  }

  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  return Array.from({ length: state.questionCount }, (_, index) => ({
    ...shuffledQuestions[index % shuffledQuestions.length],
    selectedChoice: undefined
  }));
}

function startQuiz(mode) {
  const questions = buildQuestions(mode);
  const quizBox = elements.quizArea?.closest('.quiz-box');

  if (!questions.length) {
    alert(t('common.noQuestions'));
    return;
  }

  state.quiz = {
    mode,
    questions,
    questionLimitNotice: questions.length < state.questionCount
      ? `${t('practice.questionCount')}: ${state.questionCount}. ${questions.length} unique questions available, so some questions will repeat.`
      : '',
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    startedAt: Date.now(),
    timerId: null,
    active: true,
    timed: !state.untimedMode,
    remainingSeconds: state.minutes * 60,
    totalSeconds: 0,
    finished: false
  };

  if (elements.topicSelect) {
    elements.topicSelect.disabled = true;
  }
  quizBox?.classList.add('quiz-active');

  elements.quizArea.classList.remove('hidden');
  elements.quizArea.innerHTML = '';
  elements.resultsArea.classList.add('hidden');

  renderQuestion();

  if (state.quiz.timed) {
    startCountdown();
  }
}

function startCountdown() {
  const totalSeconds = state.minutes * 60;
  state.quiz.remainingSeconds = totalSeconds;

  state.quiz.timerId = setInterval(() => {
    state.quiz.remainingSeconds -= 1;
    state.quiz.totalSeconds = totalSeconds - state.quiz.remainingSeconds;

    if (state.quiz.remainingSeconds <= 0) {
      clearInterval(state.quiz.timerId);
      finishQuiz('Time is up');
      return;
    }

    renderTimerLabel(state.quiz.remainingSeconds);
  }, 1000);

  renderTimerLabel(state.quiz.remainingSeconds);
}

function renderTimerLabel(remaining) {
  const quizMeta = document.querySelector('.quiz-meta.timer');
  const isOfficialExam = Boolean(elements.quizArea?.closest('.official-exam'));
  const timerClass = isOfficialExam ? 'quiz-meta timer exam-timer' : 'quiz-meta timer';
  const timerRole = isOfficialExam ? ' role="timer"' : '';
  const markup = `
    <div class="${timerClass}">
      <span>${t('common.timeLeft')}: <strong${timerRole}>${formatDuration(remaining)}</strong></span>
      <span>${t('common.question')} ${state.quiz.currentIndex + 1}/${state.quiz.questions.length}</span>
    </div>
  `;

  if (quizMeta) {
    quizMeta.outerHTML = markup;
  } else {
    elements.quizArea.insertAdjacentHTML('beforeend', markup);
  }
}

function renderQuestionVisual(visualType) {
  if (!visualType) return '';

  const isQuadrantVisual = visualType === 'kuadran-satu';
  const polygonPoints = isQuadrantVisual ? '62,170 62,62 170,62 170,170' : '62,170 62,62 170,170';
  const line = isQuadrantVisual ? '' : '<line x1="62" y1="62" x2="170" y2="170" class="diagram-line" />';

  return `
    <div class="question-visual">
      <p>${t('common.supportImage')}</p>
      <svg viewBox="0 0 220 210" role="img" aria-label="Coordinate diagram for the solution area">
        <defs>
          <marker id="arrow-${visualType}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
          </marker>
        </defs>
        <line x1="40" y1="170" x2="195" y2="170" class="diagram-axis" marker-end="url(#arrow-${visualType})" />
        <line x1="62" y1="190" x2="62" y2="35" class="diagram-axis" marker-end="url(#arrow-${visualType})" />
        <polygon points="${polygonPoints}" class="diagram-region" />
        ${line}
        <text x="198" y="176" class="diagram-label">x</text>
        <text x="55" y="30" class="diagram-label">y</text>
        <text x="48" y="187" class="diagram-label">0</text>
      </svg>
      <small>${t('common.regionHint')}</small>
    </div>
  `;
}

function renderQuestion() {
  if (!state.quiz || state.quiz.finished) return;

  const isOfficialExam = Boolean(elements.quizArea?.closest('.official-exam'));
  const sourceQuestion = state.quiz.questions[state.quiz.currentIndex];
  const question = localizeQuestion(sourceQuestion);
  const questionNumber = state.quiz.currentIndex + 1;

  const subPointsHtml = question.subPoints?.length
    ? `<div class="example-card" style="margin-top: 1rem;">
        <h4>${t('common.solutionTips')}</h4>
        <ul>
          ${question.subPoints.map((point) => `<li>${point}</li>`).join('')}
        </ul>
      </div>`
    : '';
  const visualHtml = renderQuestionVisual(question.visual);
  const questionLimitNotice = state.quiz.questionLimitNotice
    ? `<p class="question-limit-notice">${state.quiz.questionLimitNotice}</p>`
    : '';
  const answeredCount = state.quiz.questions.filter((item) => item.selectedChoice !== undefined).length;
  const timerMarkup = isOfficialExam && state.quiz.timed
    ? `<div class="quiz-meta timer exam-timer"><span>${t('common.timeLeft')}: <strong role="timer">${formatDuration(state.quiz.remainingSeconds)}</strong></span><span>${t('common.question')} ${questionNumber}/${state.quiz.questions.length}</span></div>`
    : '';
  const navigationMarkup = isOfficialExam ? state.quiz.questions.map((item, index) => {
    const isCurrent = index === state.quiz.currentIndex;
    const isAnswered = item.selectedChoice !== undefined;
    const label = `${t('common.goToQuestion')} ${index + 1}: ${t(isAnswered ? 'common.answered' : 'common.notAnswered')}`;
    return `<button class="question-number ${isCurrent ? 'is-current' : ''} ${isAnswered ? 'is-answered' : ''}" type="button" data-go-question="${index}" aria-label="${label}"${isCurrent ? ' aria-current="step" tabindex="0"' : ' tabindex="-1"'}>${index + 1}</button>`;
  }).join('') : '';

  const officialContent = `
    <div class="exam-layout">
      <div class="exam-main">
        <div class="exam-toolbar">
          <div class="quiz-meta"><span>${t('common.question')} ${questionNumber}/${state.quiz.questions.length}</span><span>${answeredCount} ${t('common.answered')}</span></div>
          ${timerMarkup}
        </div>
        ${questionLimitNotice}
        <div class="quiz-card exam-question-card">
          <div class="quiz-meta"><span>${question.topicName}</span><span>${t('common.question')} ${questionNumber}/${state.quiz.questions.length}</span></div>
          <h3 tabindex="-1" id="activeQuestionPrompt">${question.prompt}</h3>
          ${visualHtml}
          ${subPointsHtml}
          <div class="option-list">
            ${question.options.map((option, index) => {
              const isSelected = sourceQuestion.selectedChoice === index;
              return `<button class="option-btn ${isSelected ? 'selected' : ''}" data-choice="${index}" type="button" aria-pressed="${isSelected}" ${sourceQuestion.selectedChoice !== undefined ? 'disabled' : ''}>${option}</button>`;
            }).join('')}
          </div>
          <div class="explanation-box hidden"></div>
          <div class="quiz-footer">
            <button class="btn btn-secondary" id="previousQuestionBtn" type="button" ${questionNumber === 1 ? 'disabled' : ''}>${t('common.previous')}</button>
            <button class="btn btn-primary" id="nextQuestionBtn" type="button">
              ${questionNumber === state.quiz.questions.length ? t('common.finish') : t('common.next')}
            </button>
          </div>
        </div>
      </div>
      <aside class="question-navigation" aria-label="${t('common.questionNavigation')}">
        <div class="question-nav-heading"><h4>${t('common.questionNavigation')}</h4><span class="question-navigation-summary">${answeredCount}/${state.quiz.questions.length} ${t('common.answered')}</span></div>
        <div class="question-number-grid" role="group" aria-label="${t('common.questionNavigation')}">${navigationMarkup}</div>
        <div class="question-nav-legend" aria-label="${t('common.questionStatus')}">
          <span><i class="legend-swatch current"></i>${t('common.currentQuestion')}</span>
          <span><i class="legend-swatch answered"></i>${t('common.answered')}</span>
          <span><i class="legend-swatch"></i>${t('common.notAnswered')}</span>
        </div>
      </div>
    </div>
  `;

  const legacyContent = `
    <div class="quiz-card">
      <div class="quiz-meta">
        <span>${question.topicName}</span>
        <span>${t('common.question')} ${questionNumber}/${state.quiz.questions.length}</span>
      </div>
      ${questionLimitNotice}
      <h3>${question.prompt}</h3>
      ${visualHtml}
      ${subPointsHtml}
      <div class="option-list">
        ${question.options.map((option, index) => `
          <button class="option-btn ${sourceQuestion.selectedChoice === index ? 'selected' : ''}" data-choice="${index}" type="button" ${sourceQuestion.selectedChoice !== undefined ? 'disabled' : ''}>${option}</button>
        `).join('')}
      </div>
      <div class="explanation-box hidden"></div>
      <div class="quiz-footer">
        <button class="btn btn-primary" id="nextQuestionBtn" type="button" ${sourceQuestion.selectedChoice === undefined ? 'disabled' : ''}>
          ${questionNumber === state.quiz.questions.length ? t('common.finish') : t('common.next')}
        </button>
      </div>
    </div>
  `;
  const content = isOfficialExam ? officialContent : legacyContent;

  elements.quizArea.innerHTML = content;

  elements.quizArea.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => handleAnswer(button, sourceQuestion));
  });

  if (isOfficialExam) {
    document.getElementById('previousQuestionBtn').addEventListener('click', () => {
      if (state.quiz.currentIndex > 0) {
        state.quiz.currentIndex -= 1;
        renderQuestion();
        document.getElementById('activeQuestionPrompt')?.focus();
      }
    });
  }

  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  nextQuestionBtn.addEventListener('click', () => {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
      state.quiz.currentIndex += 1;
      renderQuestion();
    } else {
      if (isOfficialExam) {
        const unansweredCount = state.quiz.questions.filter((item) => item.selectedChoice === undefined).length;
        if (unansweredCount && !window.confirm(t('common.finishWithUnanswered'))) return;
      }
      finishQuiz('All questions completed');
    }
  });

  if (isOfficialExam) elements.quizArea.querySelectorAll('[data-go-question]').forEach((button) => {
    button.addEventListener('click', () => {
      state.quiz.currentIndex = Number(button.dataset.goQuestion);
      renderQuestion();
      document.getElementById('activeQuestionPrompt')?.focus();
    });

    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (Number(button.dataset.goQuestion) + direction + state.quiz.questions.length) % state.quiz.questions.length;
      state.quiz.currentIndex = nextIndex;
      renderQuestion();
      elements.quizArea.querySelector(`[data-go-question="${nextIndex}"]`)?.focus();
    });
  });

  if (state.quiz.timed) {
    renderTimerLabel(state.quiz.remainingSeconds);
  }
}

function handleAnswer(button, question) {
  const buttons = elements.quizArea.querySelectorAll('.option-btn');
  const nextBtn = document.getElementById('nextQuestionBtn');

  buttons.forEach((item) => {
    item.disabled = true;
  });

  const userChoice = Number(button.dataset.choice);
  button.classList.add('selected');

  question.selectedChoice = userChoice;

  if (userChoice === question.answer) {
    state.quiz.correct += 1;
  } else {
    state.quiz.wrong += 1;
  }

  nextBtn.disabled = false;
  button.setAttribute('aria-pressed', 'true');

  const answeredCount = state.quiz.questions.filter((item) => item.selectedChoice !== undefined).length;
  const currentNavButton = elements.quizArea.querySelector(`[data-go-question="${state.quiz.currentIndex}"]`);
  currentNavButton?.classList.add('is-answered');
  currentNavButton?.setAttribute('aria-label', `${t('common.goToQuestion')} ${state.quiz.currentIndex + 1}: ${t('common.answered')}`);

  elements.quizArea.querySelectorAll('.question-navigation-summary').forEach((summary) => {
    summary.textContent = `${answeredCount}/${state.quiz.questions.length} ${t('common.answered')}`;
  });

  const toolbarStatus = elements.quizArea.querySelector('.exam-toolbar .quiz-meta span:last-child');
  if (toolbarStatus) {
    toolbarStatus.textContent = `${answeredCount} ${t('common.answered')}`;
  }
}

function getReviewQuestionKey(question) {
  return `${question.topicId || 'topic'}::${question.prompt}`;
}

function loadReviewBookmarks() {
  try {
    const saved = JSON.parse(localStorage.getItem(REVIEW_BOOKMARKS_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveReviewBookmarks(bookmarks) {
  try {
    localStorage.setItem(REVIEW_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    return true;
  } catch {
    return false;
  }
}

function renderReviewCard(question, source, index, bookmarked) {
  const selectedAnswer = question.selectedChoice === undefined
    ? t('common.notAnswered')
    : question.options[question.selectedChoice];
  const solutionSteps = [...(question.subPoints || []), question.explanation].filter(Boolean);
  const distractors = question.options.map((option, optionIndex) => optionIndex === question.answer ? '' : `
    <li><strong>${option}</strong><span>${t('review.optionMismatch')} ${question.options[question.answer]}.</span></li>
  `).join('');
  const thoughtId = `reviewThought-${source}-${index}`;

  return `
    <article class="mistake-item guided-review-card" data-review-source="${source}" data-review-index="${index}">
      <div class="review-card-heading">
        <div><span class="review-topic">${question.topicName}</span><p class="review-question">${question.prompt}</p></div>
        <button class="review-bookmark ${bookmarked ? 'is-bookmarked' : ''}" type="button" data-review-bookmark aria-pressed="${bookmarked}">${t(bookmarked ? 'review.removeBookmark' : 'review.bookmark')}</button>
      </div>
      <p class="review-choice"><strong>${t('common.yourAnswer')}:</strong> ${selectedAnswer}</p>
      <section class="review-gate" aria-labelledby="${thoughtId}-label">
        <label class="review-prompt" id="${thoughtId}-label" for="${thoughtId}">${t('review.thinkingPrompt')}</label>
        <textarea id="${thoughtId}" class="review-thought-input" data-review-thought rows="3" placeholder="${t('review.thinkingPlaceholder')}"></textarea>
        <div class="review-gate-actions">
          <button class="btn btn-primary" type="button" data-review-reveal disabled>${t('review.reveal')}</button>
          <button class="btn btn-ghost" type="button" data-review-give-up>${t('review.giveUp')}</button>
        </div>
      </section>
      <section class="review-content" data-review-content hidden>
        <p class="review-student-thought" data-review-student-thought hidden><strong>${t('review.yourApproach')}:</strong> <span></span></p>
        <div class="review-section">
          <h4 tabindex="-1">${t('review.solutionSteps')}</h4>
          <ol>${solutionSteps.map((step) => `<li>${step}</li>`).join('')}</ol>
          <p><strong>${t('common.correctAnswer')}:</strong> ${question.options[question.answer]}</p>
        </div>
        <div class="review-section">
          <h4>${t('review.otherOptions')}</h4>
          <ul class="review-distractors">${distractors}</ul>
          <p class="review-source-note">${t('review.optionNote')}</p>
        </div>
        <p class="review-trap"><strong>${t('review.commonTrapLabel')}:</strong> ${t('review.commonTrap')}</p>
      </section>
    </article>
  `;
}

let savedReviewCache = [];
let currentReviewKeys = new Set();

function renderSavedReviewSection(excludedKeys = []) {
  const excluded = new Set(excludedKeys);
  savedReviewCache = loadReviewBookmarks().filter((question) => !excluded.has(question.reviewKey));
  if (!savedReviewCache.length) return '';

  return `
    <section class="saved-review-section" aria-labelledby="savedReviewTitle">
      <div class="review-list-heading"><h3 id="savedReviewTitle">${t('review.savedTitle')}</h3><span>${savedReviewCache.length}</span></div>
      <div class="mistake-list">
        ${savedReviewCache.map((question, index) => renderReviewCard(question, 'saved', index, true)).join('')}
      </div>
    </section>
  `;
}

function persistReviewBookmark(question, shouldSave) {
  const bookmarks = loadReviewBookmarks();
  const existing = bookmarks.filter((item) => item.reviewKey !== question.reviewKey);
  const nextBookmarks = shouldSave
    ? [{
        reviewKey: question.reviewKey,
        topicId: question.topicId,
        topicName: question.topicName,
        prompt: question.prompt,
        options: question.options,
        answer: question.answer,
        explanation: question.explanation,
        subPoints: question.subPoints || [],
        selectedChoice: question.selectedChoice
      }, ...existing].slice(0, 100)
    : existing;
  return saveReviewBookmarks(nextBookmarks);
}

function bindReviewInteractions() {
  if (!elements.resultsArea || elements.resultsArea.dataset.reviewBound) return;
  elements.resultsArea.dataset.reviewBound = 'true';

  elements.resultsArea.addEventListener('input', (event) => {
    const thought = event.target.closest('[data-review-thought]');
    if (!thought) return;
    const revealButton = thought.closest('.review-gate').querySelector('[data-review-reveal]');
    revealButton.disabled = !thought.value.trim();
  });

  elements.resultsArea.addEventListener('click', (event) => {
    const revealButton = event.target.closest('[data-review-reveal], [data-review-give-up]');
    if (revealButton) {
      const card = revealButton.closest('.guided-review-card');
      const thought = card.querySelector('[data-review-thought]').value.trim();
      const studentThought = card.querySelector('[data-review-student-thought]');
      if (thought) {
        studentThought.querySelector('span').textContent = thought;
        studentThought.hidden = false;
      }
      card.querySelector('[data-review-content]').hidden = false;
      card.querySelector('.review-gate').hidden = true;
      card.querySelector('.review-content h4')?.focus();
      return;
    }

    const bookmarkButton = event.target.closest('[data-review-bookmark]');
    if (!bookmarkButton) return;

    const card = bookmarkButton.closest('.guided-review-card');
    const source = card.dataset.reviewSource;
    const index = Number(card.dataset.reviewIndex);
    const question = source === 'saved' ? savedReviewCache[index] : state.reviewItems?.[index];
    if (!question) return;

    const shouldSave = bookmarkButton.getAttribute('aria-pressed') !== 'true';
    if (!persistReviewBookmark(question, shouldSave)) {
      bookmarkButton.textContent = t('review.bookmarkError');
      return;
    }

    if (source === 'saved') {
      const section = elements.resultsArea.querySelector('.saved-review-section');
      if (section) section.outerHTML = renderSavedReviewSection([...currentReviewKeys]);
      return;
    }

    bookmarkButton.setAttribute('aria-pressed', String(shouldSave));
    bookmarkButton.classList.toggle('is-bookmarked', shouldSave);
    bookmarkButton.textContent = t(shouldSave ? 'review.removeBookmark' : 'review.bookmark');
    const section = elements.resultsArea.querySelector('.saved-review-section');
    const markup = renderSavedReviewSection([...currentReviewKeys]);
    if (section) {
      section.outerHTML = markup || '';
    } else if (markup) {
      elements.resultsArea.querySelector('.result-box')?.insertAdjacentHTML('beforeend', markup);
    }
  });
}

function restoreSavedReviews() {
  const bookmarks = loadReviewBookmarks();
  if (!bookmarks.length || !elements.resultsArea) return;
  currentReviewKeys = new Set();
  elements.resultsArea.innerHTML = `<div class="result-box">${renderSavedReviewSection()}</div>`;
  elements.resultsArea.classList.remove('hidden');
}

function finishQuiz(statusText) {
  if (!state.quiz) return;

  clearInterval(state.quiz.timerId);
  document.querySelector('.quiz-meta.timer')?.remove();
  elements.quizArea?.closest('.quiz-box')?.classList.remove('quiz-active');
  if (elements.topicSelect) {
    elements.topicSelect.disabled = false;
  }
  state.quiz.finished = true;

  const total = state.quiz.questions.length;
  const accuracy = total ? Math.round((state.quiz.correct / total) * 100) : 0;
  const elapsedSeconds = Math.max(1, Math.round((Date.now() - state.quiz.startedAt) / 1000));
  const reviewQuestions = state.quiz.questions.map((question) => ({
      ...localizeQuestion(question),
      reviewKey: getReviewQuestionKey(question)
    }));
  state.reviewItems = reviewQuestions;
  currentReviewKeys = new Set(reviewQuestions.map((question) => question.reviewKey));
  const bookmarks = loadReviewBookmarks();

  elements.resultsArea.innerHTML = `
    <div class="result-box">
      <h3>${statusText}</h3>
      <div class="result-summary">
        <p><strong>${t('common.score')}:</strong> ${state.quiz.correct}/${total}</p>
        <p><strong>${t('common.accuracy')}:</strong> ${accuracy}%</p>
        <p><strong>${t('common.correct')}:</strong> ${state.quiz.correct}</p>
        <p><strong>${t('common.wrong')}:</strong> ${state.quiz.wrong}</p>
        <p><strong>${t('common.time')}:</strong> ${formatDuration(elapsedSeconds)}</p>
      </div>
      <section class="guided-review-section" aria-labelledby="reviewQuestionsTitle">
        <h3 id="reviewQuestionsTitle">${t('review.sectionTitle')}</h3>
        ${reviewQuestions.length
          ? `<div class="mistake-list">${reviewQuestions.map((question, index) => renderReviewCard(question, 'current', index, bookmarks.some((item) => item.reviewKey === question.reviewKey))).join('')}</div>`
          : `<p class="review-empty-state">${t('review.noMistakes')}</p>`}
      </section>
      ${renderSavedReviewSection([...currentReviewKeys])}
    </div>
  `;

  elements.resultsArea.classList.remove('hidden');
  elements.quizArea.classList.add('hidden');
  bindReviewInteractions();

  recordProgress();
  renderProgressOverview();
}

function recordProgress() {
  if (!state.quiz) return;

  const topicIds = state.quiz.mode === 'subtest'
    ? [state.selectedTopicId]
    : [...new Set(state.quiz.questions.map((q) => q.topicId))];

  topicIds.forEach((topicId) => {
    const current = state.progress.byTopic[topicId] || { attempts: 0, correct: 0, wrong: 0, totalSeconds: 0 };
    const relevant = state.quiz.questions.filter((question) => question.topicId === topicId);
    const correct = relevant.filter((question) => question.selectedChoice === question.answer).length;
    const wrong = relevant.length - correct;

    current.attempts += 1;
    current.correct += correct;
    current.wrong += wrong;
    current.totalSeconds += state.quiz.totalSeconds || Math.max(1, Math.round((Date.now() - state.quiz.startedAt) / 1000));

    state.progress.byTopic[topicId] = current;
  });

  if (state.quiz.mode === 'exam') {
    state.progress.examHistory.push({
      date: new Date().toISOString(),
      correct: state.quiz.correct,
      wrong: state.quiz.wrong,
      total: state.quiz.questions.length,
      accuracy: Math.round((state.quiz.correct / state.quiz.questions.length) * 100),
      difficulty: state.difficulty,
      mode: state.untimedMode ? 'untimed' : 'timed'
    });
  }

  saveProgress();
}

function renderProgressOverview() {
  if (!elements.progressOverview) return;

  const allTopics = getAllTopics();
  const totalAttempts = allTopics.reduce((sum, topic) => sum + (state.progress.byTopic[topic.id]?.attempts || 0), 0);
  const completion = totalAttempts > 0 ? Math.min(100, Math.round((totalAttempts / (allTopics.length * 4)) * 100)) : 0;

  if (elements.overviewPercent) {
    elements.overviewPercent.textContent = `${completion}%`;
  }

  const ring = document.querySelector('.progress-ring');
  if (ring) {
    ring.style.background = `conic-gradient(var(--primary) ${completion * 3.6}deg, rgba(79,70,229,0.15) 0deg)`;
  }

  const cardsHtml = getAllTopics().map((topic) => {
    const stats = getTopicStats(topic.id);
    const accuracy = stats.attempts ? Math.min(100, Math.round((stats.correct / Math.max(stats.correct + stats.wrong, 1)) * 100)) : 0;
    const averageSeconds = stats.attempts ? Math.round(stats.totalSeconds / stats.attempts) : 0;

    return `
      <div class="progress-card">
        <h3>${topic.name}</h3>
        <div class="progress-wrapper">
          <div class="progress-row">
            <div class="label">
              <span>${t('common.accuracy')}</span>
              <strong>${accuracy}%</strong>
            </div>
            <div class="progress-bar">
              <span style="width:${accuracy}%"></span>
            </div>
          </div>
        </div>
        <div class="progress-metrics">
          <span>${t('common.correct')}: ${stats.correct}</span>
          <span>${t('common.wrong')}: ${stats.wrong}</span>
          <span>${t('common.average')}: ${formatDuration(averageSeconds)}</span>
        </div>
      </div>
    `;
  }).join('');

  const latestExam = state.progress.examHistory[state.progress.examHistory.length - 1];
  const examHtml = latestExam
    ? `
      <div class="exam-summary">
        <div class="summary-stat">
          <span>${t('common.latestExam')}</span>
          <strong>${latestExam.accuracy}%</strong>
        </div>
        <div class="summary-stat">
          <span>${t('common.correct')}</span>
          <strong>${latestExam.correct}</strong>
        </div>
        <div class="summary-stat">
          <span>${t('common.wrong')}</span>
          <strong>${latestExam.wrong}</strong>
        </div>
        <div class="summary-stat">
          <span>${t('common.mode')}</span>
          <strong>${latestExam.mode === 'untimed' ? t('common.untimed') : t('common.timed')}</strong>
        </div>
      </div>
    `
    : `<div class="summary-stat"><span>${t('common.latestExam')}</span><strong>${t('common.noDataYet')}</strong></div>`;

  elements.progressOverview.innerHTML = `
    <div class="progress-grid">
      ${cardsHtml}
    </div>
    <div class="progress-card" style="margin-top: 1rem;">
      <h3>${t('common.examSummary')}</h3>
      ${examHtml}
    </div>
  `;
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function bindFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  const status = document.getElementById('feedbackStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = {
      type: (formData.get('type') || 'suggestion').toString(),
      message: (formData.get('message') || '').toString().trim(),
      createdAt: new Date().toISOString()
    };

    if (!payload.message) {
      status.textContent = 'Feedback message cannot be empty.';
      status.style.color = '#b91c1c';
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('edulearn-feedback') || '[]');
      const next = [payload, ...existing].slice(0, 20);
      localStorage.setItem('edulearn-feedback', JSON.stringify(next));
      form.reset();
      status.textContent = 'Thank you! Your feedback has been saved.';
      status.style.color = '#15803d';
    } catch (error) {
      status.textContent = 'Sorry, feedback could not be saved right now.';
      status.style.color = '#b91c1c';
    }
  });
}

function bindLandingPrediction() {
  const choices = document.getElementById('landingPredictionChoices');
  const checkButton = document.getElementById('checkLandingAnswer');
  const feedback = document.getElementById('landingFeedback');
  if (!choices || !checkButton || !feedback) return;

  checkButton.addEventListener('click', () => {
    const selected = choices.querySelector('input:checked');
    if (!selected) {
      feedback.textContent = t('landing.chooseFirst');
      feedback.className = 'landing-feedback';
      choices.querySelector('input')?.focus();
      return;
    }

    const isCorrect = selected.value === '2,3';
    feedback.textContent = t(isCorrect ? 'landing.correct' : 'landing.tryAgain');
    feedback.className = `landing-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
  });
}

function showAppView(targetId, shouldScroll = true) {
  const targetSection = document.querySelector(targetId);
  const viewSections = ['#materi', '#latihan'];
  if (!targetSection || !viewSections.includes(targetId)) return;

  viewSections.forEach((sectionId) => {
    const section = document.querySelector(sectionId);
    const isActive = sectionId === targetId;
    section.hidden = !isActive;
    section.setAttribute('aria-hidden', String(!isActive));
  });

  document.querySelectorAll('[data-view-target]').forEach((link) => {
    const isActive = link.dataset.viewTarget === targetId;
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
    if (link.classList.contains('cta-link')) {
      link.classList.toggle('active', isActive);
    }
  });

  if (shouldScroll) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (history.pushState && window.location.hash !== targetId) {
    history.pushState(null, '', targetId);
  }
}

function bindCtaLinks() {
  const viewLinks = document.querySelectorAll('[data-view-target]');
  if (!viewLinks.length) return;

  viewLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      showAppView(link.dataset.viewTarget);
    });
  });

  window.addEventListener('popstate', () => {
    const target = window.location.hash === '#latihan' ? '#latihan' : '#materi';
    showAppView(target, false);
  });

  const initialTarget = window.location.hash === '#latihan' ? '#latihan' : '#materi';
  showAppView(initialTarget, false);
}

const settingsTranslations = {
  en: {
    'nav.topics': 'Topics',
    'nav.practice': 'Practice',
    'nav.progress': 'Progress',
    'nav.feedback': 'Feedback',
    'nav.startLearning': 'Start Learning',
    'landing.eyebrow': 'PK UTBK practice',
    'landing.title': 'Practice PK. See the explanation after you try.',
    'landing.description': 'Choose an answer first. Then review the solution steps and topic accuracy to decide what to practice next.',
    'landing.exampleLabel': 'PK sample question',
    'landing.exampleNumber': 'Example · 01',
    'landing.question': 'The roots of x² - 5x + 6 = 0 are ...',
    'landing.chooseAnswer': 'Choose your answer',
    'landing.checkAnswer': 'Check my answer',
    'landing.feedbackPrompt': 'Choose an answer first, then we can check the steps.',
    'landing.chooseFirst': 'Choose one answer first, then we can check it together.',
    'landing.correct': 'That is right. (x - 2)(x - 3) = 0, so the roots are 2 and 3.',
    'landing.tryAgain': 'Not quite. Find two numbers that multiply to 6 and add to 5, then check their signs.',
    'hero.eyebrow': 'Grade 11 Mathematics',
    'hero.title': 'Complete PK and PM learning for UTBK preparation',
    'hero.description': 'EduLearn is a math learning platform that separates PK and PM topics, with detailed explanations, subtest questions, full-review exams, and progress tracking.',
    'cta.viewTopics': 'View Topics',
    'cta.startPractice': 'Start Practice',
    'topics.label': 'Available Topics',
    'topics.title': 'Select your study material group',
    'practice.label': 'Practice Questions',
    'practice.title': 'Adjust the practice mode to match your needs',
    'progress.label': 'Progress Chart',
    'progress.title': 'Track efficiency and results for each subtest',
    'feedback.label': 'Feedback & Suggestions',
    'feedback.title': 'Share your feedback to improve the app',
    'settings.title': 'Settings',
    'settings.languageLabel': 'Language',
    'settings.themeLabel': 'Theme',
    'settings.lightTheme': 'Light',
    'settings.darkTheme': 'Dark',
    'practice.subtest': 'Subtest',
    'practice.difficulty': 'Difficulty',
    'practice.time': 'Time',
    'practice.questionCount': 'Number of questions',
    'practice.untimed': 'Untimed mode',
    'practice.openSubtest': 'Start Subtest',
    'practice.fullReview': 'Full Review Exam',
    'practice.easy': 'Easy',
    'practice.medium': 'Medium',
    'practice.hard': 'Hard',
    'feedback.typeLabel': 'Feedback type',
    'feedback.optionSuggestion': 'Suggestion',
    'feedback.optionCriticism': 'Criticism',
    'feedback.optionRequest': 'Feature request',
    'feedback.messageLabel': 'Message',
    'feedback.placeholder': 'Write your suggestion, criticism, or requested feature...',
    'feedback.sendButton': 'Send Feedback',
    'common.practice': 'Practice',
    'common.accuracy': 'Accuracy',
    'common.correct': 'Correct',
    'common.wrong': 'Wrong',
    'common.average': 'Average',
    'common.time': 'Time',
    'common.score': 'Score',
    'common.materialDefinition': 'Material definition',
    'common.keyFormulas': 'Key formulas',
    'common.workedExamples': 'Worked examples',
    'common.subtestPractice': 'Subtest practice',
    'common.chooseSubtest': 'Choose subtest',
    'common.solutionTips': 'Solution tips',
    'common.supportImage': 'Support image',
    'common.regionHint': 'The colored region shows the area that satisfies the problem constraints.',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.finish': 'Finish',
    'common.finishWithUnanswered': 'Some questions are still unanswered. Finish anyway?',
    'common.questionNavigation': 'Question navigation',
    'common.questionStatus': 'Question status',
    'common.currentQuestion': 'Current',
    'common.goToQuestion': 'Go to question',
    'common.answered': 'answered',
    'common.question': 'Question',
    'common.timeLeft': 'Time left',
    'common.examSummary': 'Overall exam summary',
    'common.latestExam': 'Latest exam',
    'common.mode': 'Mode',
    'common.untimed': 'Untimed',
    'common.timed': 'Timed',
    'common.noDataYet': 'No data yet',
    'common.correction': 'Correction',
    'common.yourAnswer': 'Your answer',
    'common.correctAnswer': 'Correct answer',
    'common.explanation': 'Explanation',
    'common.notAnswered': 'Not answered',
    'common.completed': 'All questions completed',
    'common.timeUp': 'Time is up',
    'common.noQuestions': 'There are no questions for the selected difficulty.',
    'review.sectionTitle': 'Let’s go over the questions to revisit',
    'review.thinkingPrompt': 'What do you think the first step is?',
    'review.thinkingPlaceholder': 'Write a short thought, even if you are not sure yet.',
    'review.reveal': 'Show explanation',
    'review.giveUp': 'Not sure yet, show me',
    'review.yourApproach': 'Your first thought',
    'review.solutionSteps': 'Solution steps',
    'review.otherOptions': 'Why the other options do not fit',
    'review.optionMismatch': 'This does not match the result from the steps above. The answer that fits is',
    'review.optionNote': 'The question data does not include a specific explanation for each distractor.',
    'review.commonTrapLabel': 'Common thing to check',
    'review.commonTrap': 'Recheck the sign, the value you substituted, and each step of the calculation before choosing.',
    'review.bookmark': 'Review later',
    'review.removeBookmark': 'Saved for review',
    'review.bookmarkError': 'Could not save on this device',
    'review.savedTitle': 'Saved to review later',
    'review.noMistakes': 'No incorrect or unanswered questions to review this time.'
  },
  id: {
    'nav.topics': 'Topik',
    'nav.practice': 'Latihan',
    'nav.progress': 'Progres',
    'nav.feedback': 'Masukan',
    'nav.startLearning': 'Mulai Belajar',
    'landing.eyebrow': 'Latihan PK UTBK',
    'landing.title': 'Latihan PK, dengan pembahasan setelah kamu mencoba.',
    'landing.description': 'Pilih jawaban dulu. Setelah itu, lihat langkah penyelesaian dan akurasi per topik untuk menentukan latihan berikutnya.',
    'landing.exampleLabel': 'Contoh soal PK',
    'landing.exampleNumber': 'Contoh · 01',
    'landing.question': 'Akar-akar dari x² - 5x + 6 = 0 adalah ...',
    'landing.chooseAnswer': 'Pilih jawabanmu',
    'landing.checkAnswer': 'Periksa jawaban',
    'landing.feedbackPrompt': 'Pilih jawaban dulu, lalu kita cek langkahnya.',
    'landing.chooseFirst': 'Pilih salah satu jawaban dulu, baru kita periksa bersama.',
    'landing.correct': 'Tepat. (x - 2)(x - 3) = 0, jadi akar-akarnya 2 dan 3.',
    'landing.tryAgain': 'Belum tepat. Cari dua angka yang hasil kalinya 6 dan jumlahnya 5, lalu periksa tandanya.',
    'hero.eyebrow': 'Matematika Kelas 11',
    'hero.title': 'Belajar PK dan PM lengkap untuk persiapan UTBK',
    'hero.description': 'EduLearn adalah platform belajar matematika yang memisahkan materi PK dan PM, dengan penjelasan detail, soal subtes, ujian lengkap, dan tracking progres.',
    'cta.viewTopics': 'Lihat Topik',
    'cta.startPractice': 'Mulai Praktik',
    'topics.label': 'Topik Tersedia',
    'topics.title': 'Pilih kelompok materi belajar Anda',
    'practice.label': 'Soal Praktik',
    'practice.title': 'Sesuaikan mode latihan dengan kebutuhan Anda',
    'progress.label': 'Grafik Progress',
    'progress.title': 'Pantau efisiensi dan hasil setiap subtes',
    'feedback.label': 'Masukan & Saran',
    'feedback.title': 'Bagikan masukan untuk meningkatkan aplikasi',
    'settings.title': 'Pengaturan',
    'settings.languageLabel': 'Bahasa',
    'settings.themeLabel': 'Tema',
    'settings.lightTheme': 'Terang',
    'settings.darkTheme': 'Gelap',
    'practice.subtest': 'Subtes',
    'practice.difficulty': 'Tingkat Kesulitan',
    'practice.time': 'Waktu',
    'practice.questionCount': 'Jumlah soal',
    'practice.untimed': 'Mode tanpa batas waktu',
    'practice.openSubtest': 'Mulai Subtes',
    'practice.fullReview': 'Ujian Review Lengkap',
    'practice.easy': 'Mudah',
    'practice.medium': 'Sedang',
    'practice.hard': 'Sulit',
    'feedback.typeLabel': 'Jenis masukan',
    'feedback.optionSuggestion': 'Saran',
    'feedback.optionCriticism': 'Kritik',
    'feedback.optionRequest': 'Permintaan fitur',
    'feedback.messageLabel': 'Pesan',
    'feedback.placeholder': 'Tulis saran, kritik, atau fitur yang Anda minta...',
    'feedback.sendButton': 'Kirim Masukan',
    'common.practice': 'Latihan',
    'common.accuracy': 'Akurasi',
    'common.correct': 'Benar',
    'common.wrong': 'Salah',
    'common.average': 'Rata-rata',
    'common.time': 'Waktu',
    'common.score': 'Skor',
    'common.materialDefinition': 'Definisi materi',
    'common.keyFormulas': 'Rumus utama',
    'common.workedExamples': 'Contoh pengerjaan',
    'common.subtestPractice': 'Latihan subtes',
    'common.chooseSubtest': 'Pilih subtes',
    'common.solutionTips': 'Tips penyelesaian',
    'common.supportImage': 'Gambar pendukung',
    'common.regionHint': 'Daerah berwarna menunjukkan area yang memenuhi kendala soal.',
    'common.next': 'Lanjut',
    'common.previous': 'Sebelumnya',
    'common.finish': 'Selesai',
    'common.finishWithUnanswered': 'Masih ada soal yang belum dijawab. Selesaikan ujian sekarang?',
    'common.questionNavigation': 'Navigasi soal',
    'common.questionStatus': 'Status soal',
    'common.currentQuestion': 'Sedang dibuka',
    'common.goToQuestion': 'Ke soal',
    'common.answered': 'terjawab',
    'common.question': 'Soal',
    'common.timeLeft': 'Waktu tersisa',
    'common.examSummary': 'Ringkasan ujian keseluruhan',
    'common.latestExam': 'Ujian terakhir',
    'common.mode': 'Mode',
    'common.untimed': 'Tanpa batas waktu',
    'common.timed': 'Dengan waktu',
    'common.noDataYet': 'Belum ada data',
    'common.correction': 'Perbaikan',
    'common.yourAnswer': 'Jawaban Anda',
    'common.correctAnswer': 'Jawaban benar',
    'common.explanation': 'Penjelasan',
    'common.notAnswered': 'Tidak dijawab',
    'common.completed': 'Semua soal selesai',
    'common.timeUp': 'Waktu habis',
    'common.noQuestions': 'Belum ada soal untuk tingkat kesulitan yang dipilih.',
    'review.sectionTitle': 'Yuk, bahas lagi soal-soal ini',
    'review.thinkingPrompt': 'Menurutmu, langkah pertama apa?',
    'review.thinkingPlaceholder': 'Tulis pemikiran singkatmu, tidak harus yakin dulu.',
    'review.reveal': 'Buka pembahasan',
    'review.giveUp': 'Belum tahu, buka pembahasan',
    'review.yourApproach': 'Pemikiran awalmu',
    'review.solutionSteps': 'Langkah penyelesaian',
    'review.otherOptions': 'Kenapa opsi lain tidak cocok',
    'review.optionMismatch': 'Belum sesuai dengan hasil dari langkah di atas. Jawaban yang cocok adalah',
    'review.optionNote': 'Data soal belum menyertakan alasan khusus untuk setiap opsi pengecoh.',
    'review.commonTrapLabel': 'Hal yang sering terlewat',
    'review.commonTrap': 'Cek lagi tanda, nilai yang kamu masukkan, dan setiap langkah hitung sebelum memilih.',
    'review.bookmark': 'Tandai untuk diulang',
    'review.removeBookmark': 'Tersimpan untuk diulang',
    'review.bookmarkError': 'Tidak bisa disimpan di perangkat ini',
    'review.savedTitle': 'Tersimpan untuk diulang nanti',
    'review.noMistakes': 'Tidak ada soal salah atau belum dijawab untuk dibahas kali ini.'
  }
};

function t(key, fallback = '') {
  const language = getSettings().language || 'en';
  return settingsTranslations[language]?.[key] || settingsTranslations.en[key] || fallback || key;
}

function getSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('edulearn-settings') || '{}');
    return {
      language: saved.language || 'en',
      theme: saved.theme || 'light'
    };
  } catch {
    return { language: 'en', theme: 'light' };
  }
}

function saveSettings(settings) {
  localStorage.setItem('edulearn-settings', JSON.stringify(settings));
}

function applySettings() {
  const settings = getSettings();
  const languageSelect = document.getElementById('languageSelect');
  const themeButtons = document.querySelectorAll('.theme-btn');
  const settingsPanel = document.getElementById('settingsPanel');

  document.body.dataset.theme = settings.theme;
  document.documentElement.lang = settings.language;

  if (languageSelect) {
    languageSelect.value = settings.language;
  }

  themeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === settings.theme);
  });

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translation = settingsTranslations[settings.language]?.[key] || settingsTranslations.en[key];
    if (translation) {
      element.textContent = translation;
    }
  });

  const placeholderField = document.getElementById('feedbackMessage');
  if (placeholderField) {
    const placeholder = settingsTranslations[settings.language]?.['feedback.placeholder'] || settingsTranslations.en['feedback.placeholder'];
    placeholderField.placeholder = placeholder;
  }

  setDifficultyButtons();
  renderSubjectTabs();
  renderTopicCards();
  renderTopicDetail();
  renderTopicSelect();
  renderProgressOverview();

  if (state.quiz && !state.quiz.finished) {
    renderQuestion();
  }

  if (settingsPanel) {
    settingsPanel.classList.add('hidden');
  }
}

function bindSettings() {
  const settingsToggle = document.getElementById('settingsToggle');
  const settingsPanel = document.getElementById('settingsPanel');
  const closeSettings = document.getElementById('closeSettings');
  const languageSelect = document.getElementById('languageSelect');
  const themeButtons = document.querySelectorAll('.theme-btn');

  settingsToggle?.addEventListener('click', () => {
    settingsPanel?.classList.toggle('hidden');
  });

  closeSettings?.addEventListener('click', () => {
    settingsPanel?.classList.add('hidden');
  });

  languageSelect?.addEventListener('change', (event) => {
    const nextSettings = getSettings();
    nextSettings.language = event.target.value;
    saveSettings(nextSettings);
    applySettings();
  });

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextSettings = getSettings();
      nextSettings.theme = button.dataset.theme;
      saveSettings(nextSettings);
      applySettings();
    });
  });
}

function initialize() {
  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  if (elements.timerMinutes) {
    elements.timerMinutes.value = state.minutes;
    elements.timerMinutes.disabled = state.untimedMode;
  }

  const questionCountInput = document.getElementById('questionCount');
  if (questionCountInput) {
    questionCountInput.value = state.questionCount;
  }

  const untimedCheckbox = document.getElementById('untimedMode');
  if (untimedCheckbox) {
    untimedCheckbox.checked = state.untimedMode;
  }

  renderSubjectTabs();
  renderTopicCards();
  renderTopicDetail();
  renderTopicSelect();
  setDifficultyButtons();
  renderProgressOverview();
  bindEvents();
  bindFeedbackForm();
  bindLandingPrediction();
  bindCtaLinks();
  bindSettings();
  applySettings();
  restoreSavedReviews();
  bindReviewInteractions();
}

initialize();
