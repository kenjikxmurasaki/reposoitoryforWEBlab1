console.log("Використання: triangle(значення1, тип1, значення2, тип2)");
console.log("Типи: leg, hypotenuse, adjacent angle, opposite angle, angle");

function triangle(x, typeX, y, typeY) {
    let a, b, c, alpha, beta, rad;

    if (x <= 0 || y <= 0)
        return "Некоректні значення";

    if (typeX == "leg" && typeY == "leg") {
        a = x;
        b = y;
        c = Math.sqrt(a * a + b * b);
    }

    else if (typeX == "leg" && typeY == "hypotenuse") {
        a = x;
        c = y;

        if (a >= c)
            return "Некоректні значення";

        b = Math.sqrt(c * c - a * a);
    }

    else if (typeX == "hypotenuse" && typeY == "leg") {
        c = x;
        a = y;

        if (a >= c)
            return "Некоректні значення";

        b = Math.sqrt(c * c - a * a);
    }

    else if (typeX == "leg" && typeY == "opposite angle") {
        a = x;
        alpha = y;

        if (alpha <= 0 || alpha >= 90)
            return "Некоректний кут";

        rad = alpha * Math.PI / 180;
        b = a / Math.tan(rad);
        c = a / Math.sin(rad);
    }

    else if (typeX == "opposite angle" && typeY == "leg") {
        alpha = x;
        a = y;

        if (alpha <= 0 || alpha >= 90)
            return "Некоректний кут";

        rad = alpha * Math.PI / 180;
        b = a / Math.tan(rad);
        c = a / Math.sin(rad);
    }

    else if (typeX == "leg" && typeY == "adjacent angle") {
        a = x;
        beta = y;

        if (beta <= 0 || beta >= 90)
            return "Некоректний кут";

        rad = beta * Math.PI / 180;
        b = a * Math.tan(rad);
        c = a / Math.cos(rad);
    }

    else if (typeX == "adjacent angle" && typeY == "leg") {
        beta = x;
        a = y;

        if (beta <= 0 || beta >= 90)
            return "Некоректний кут";

        rad = beta * Math.PI / 180;
        b = a * Math.tan(rad);
        c = a / Math.cos(rad);
    }

    else if (typeX == "hypotenuse" && typeY == "angle") {
        c = x;
        alpha = y;

        if (alpha <= 0 || alpha >= 90)
            return "Некоректний кут";

        rad = alpha * Math.PI / 180;
        a = c * Math.sin(rad);
        b = c * Math.cos(rad);
    }

    else if (typeX == "angle" && typeY == "hypotenuse") {
        alpha = x;
        c = y;

        if (alpha <= 0 || alpha >= 90)
            return "Некоректний кут";

        rad = alpha * Math.PI / 180;
        a = c * Math.sin(rad);
        b = c * Math.cos(rad);
    }

    else {
        console.log("Перечитайте інструкцію.");
        return "failed";
    }

    alpha = Math.atan(a / b) * 180 / Math.PI;
    beta = 90 - alpha;

    alpha = Math.round(alpha * 100) / 100;
    beta = Math.round(beta * 100) / 100;

    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("alpha =", alpha, "°");
    console.log("beta =", beta, "°");

    return "success";
}