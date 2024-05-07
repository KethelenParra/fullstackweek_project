import { Restaurant } from "@prisma/client";
import Image from "next/image";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import { formatCurrency } from "./_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className={"min-w-[266px] max-w-[266px] relative"}>
      {/* IMAGEM */}
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          fill
          sizes="100%"
          className="rounded-lg object-cover"
          alt={restaurant.name}
        />
      </div>

      <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary bg-white px-2 py-[2px]">
        <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
        <span className="text-xs font-semibold">5.0</span>
      </div>

      <div className="absolute right-2 top-2">
        <Button
          size="icon"
          className="h-7 w-7 rounded-full bg-gray-700 flex justify-center items-center"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>

      {/* TEXTO */}
      <div className="mt-2">
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        {/* INFORMAÇÕES DA ENTREGA */}
        <div className="flex gap-3">
          {/* CUSTO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          {/* TEMPO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
